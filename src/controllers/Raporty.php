<?php

/**
 * Created by PhpStorm.
 * User: tppli
 * Date: 13.01.2018
 * Time: 14:13
 */

require_once 'libs/Controller.php';

class Raporty extends Controller {
    public function indexAction() {
        $this->view->setRender('raporty/index');
    }
}