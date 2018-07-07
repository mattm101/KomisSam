<?php


require_once('libs/Controller.php');

class ErrorApp extends Controller
{
    public function IndexAction() {
        $this->view->message = "The controller doesn't exits!";
        $this->view->render('error/index');
    }
}
