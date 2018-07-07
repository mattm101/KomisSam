<?php

/**
 * Created by PhpStorm.
 * User: tppli
 * Date: 02.12.2017
 * Time: 14:49
 */
class View
{
    public function __construct() {

    }

    public function render($viewScript, $data = []) {
        require 'views/' . $viewScript . '.phtml';
		//require $viewScript;
    }

    public function setRender($view, $data = []) {
        require 'views/' . $view . '.phtml';
    }

}