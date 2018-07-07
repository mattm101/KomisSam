<?php

/**
 * Created by PhpStorm.
 * User: tppli
 * Date: 02.12.2017
 * Time: 15:17
 */

require_once('libs/Controller.php');

class ErrorApp extends Controller
{
    public function IndexAction() {
        $this->view->message = "The controller doesn't exits!";
        $this->view->render('error/index');
    }
}