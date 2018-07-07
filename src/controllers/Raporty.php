<?php

require_once 'libs/Controller.php';

class Raporty extends Controller {
    public function indexAction() {
        $this->view->setRender('raporty/index');
    }
}
