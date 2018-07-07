<?php

require_once 'libs/Controller.php';

class Index extends Controller
{
    public function indexAction() {
        $this->view->render('pojazdy/index');
    }
}
