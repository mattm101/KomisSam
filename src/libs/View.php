<?php

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
