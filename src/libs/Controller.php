<?php

/**
 * Created by PhpStorm.
 * User: tppli
 * Date: 02.12.2017
 * Time: 14:42
 */

require_once 'View.php';

class Controller
{
    public function __construct()
    {
        $this->view = new View();
    }
}