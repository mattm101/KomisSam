<?php

/**
 * Created by PhpStorm.
 * User: tppli
 * Date: 02.12.2017
 * Time: 14:37
 */

require_once 'libs/Controller.php';
//require_once 'libs/User.php';

class Index extends Controller
{
    public function indexAction() {
        $this->view->render('pojazdy/index');
    }
}