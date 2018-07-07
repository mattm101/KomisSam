<?php

class Bootstrap
{
    public function __construct() {
        // 1. Router
		
        $tokens = explode('/', rtrim($_SERVER['REQUEST_URI'], '/'));
		/*
         echo '<pre>';
        print_r($_SERVER);
        print_r($tokens);
        echo '</pre>'; */

        // 2. Dispatcher
        $controllerName = ucfirst($tokens[1]);
       if(file_exists('controllers/'.$controllerName.'.php')) {
            require_once('controllers/' . $controllerName . '.php');
            $controller = new $controllerName;
            if(isset($tokens[2])) {
                $actionName = $tokens[2] . 'Action';
                if(isset($tokens[3])) {
                    $controller->{$actionName}($tokens[3]);
                } else {
                    $controller->{$actionName}();
                }
            } else {
                // default action
                $controller->IndexAction();
            }
        } else {
            require_once('controllers/ErrorApp.php');
            $controllerName = 'ErrorApp';
            $controller = new $controllerName;
            $controller->IndexAction();
        }
    }
}
