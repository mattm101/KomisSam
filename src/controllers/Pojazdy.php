<?php

/**
 * Created by PhpStorm.
 * User: tppli
 * Date: 13.01.2018
 * Time: 14:13
 */

require_once 'libs/Controller.php';

class Pojazdy extends Controller {
    public function indexAction() {
        $this->getVehicles();
    }

    public function getVehicles() {
        $naglowki = array(
            "Content-Type: application/json"
        );

        $curl = curl_init();
        if (!$curl) {
            exit(1);
        }
        $opcjeCurl = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => $naglowki,
            CURLOPT_URL => "https://my-json-server.typicode.com/MateuszMalec101/fakePojazdy/pojazdy",
        );
        if (!curl_setopt_array($curl, $opcjeCurl)) {
            exit(2);
        }
        $wynik = curl_exec($curl);

        if ($wynik === false) {
            exit(3);
        }

        $wyniki = json_decode($wynik, true);

        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200) {
            $this->view->setRender('pojazdy/index', ["pojazdy" => $wyniki]);
        } else {
            $this->view->setRender('pojazdy/index');
        }
    }

    public function dodajAction(){
        $naglowki = array(
            "Content-Type: application/json",
            "Content-Length: " . strlen(json_encode($_POST))
        );

        $curl = curl_init();
        if (!$curl) {
            exit(1);
        }

        $opcjeCurl = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS => json_encode($_POST),
            CURLOPT_CUSTOMREQUEST => "POST",
            //CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => $naglowki,
            CURLOPT_URL => "https://my-json-server.typicode.com/MateuszMalec101/fakePojazdy/pojazdy/$id",
            CURLOPT_VERBOSE => true,
            CURLOPT_HEADER => true,
            CURLINFO_HEADER_OUT => true
        );
        if (!curl_setopt_array($curl, $opcjeCurl)) {
            exit(2);
        }
        $wynik = curl_exec($curl);

        if ($wynik === false) {
            exit(3);
        }

        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200) {
            header('Location: /pojazdy');
        } else {
            //tutaj dopisać obsługę błędów
            header('Location: /pojazdy');
        }

    }

    public function postDetaleWrapper(){

    }

   /* public function detaleAction() {
        $id = $_GET['id'];

        $naglowki = array(
            "Content-Type: application/json"
        );

        $curl = curl_init();
        if (!$curl) {
            exit(1);
        }
        $opcjeCurl = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => $naglowki,
            CURLOPT_URL => "https://my-json-server.typicode.com/MateuszMalec101/fakePojazdy/pojazdy/$id",
        );
        if (!curl_setopt_array($curl, $opcjeCurl)) {
            exit(2);
        }
        $wynik = curl_exec($curl);

        if ($wynik === false) {
            exit(3);
        }

        $wyniki = json_decode($wynik, true);


        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200) {
            $this->view->setRender('pojazdy/details', ["detale" => $wyniki]);
        } else {
            $this->view->setRender('pojazdy/details');
        }
    }
    */

    public function detaleAction($id) {
         
        $naglowki = array(
            "Content-Type: application/json"
        );

        $curl = curl_init();
        if (!$curl) {
            exit(1);
        }
        $opcjeCurl = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => $naglowki,
            CURLOPT_URL => "https://my-json-server.typicode.com/MateuszMalec101/fakePojazdy/pojazdy/$id",
        );
        if (!curl_setopt_array($curl, $opcjeCurl)) {
            exit(2);
        }
        $wynik = curl_exec($curl);

        if ($wynik === false) {
            exit(3);
        }

        $wyniki = json_decode($wynik, true);


        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200) {
            $this->view->setRender('pojazdy/details', ["detale" => $wyniki]);
        } else {
            $this->view->setRender('pojazdy/details');
        }
    }

    public function sprzedajAction($id) {
        

        $naglowki = array(
            "Content-Type: application/json"
        );

        $curl = curl_init();
        if (!$curl) {
            exit(1);
        }
        $opcjeCurl = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "DELETE",
            CURLOPT_HTTPHEADER => $naglowki,
            CURLOPT_URL => "https://my-json-server.typicode.com/MateuszMalec101/fakePojazdy/pojazdy/$id",
        );
        if (!curl_setopt_array($curl, $opcjeCurl)) {
            exit(2);
        }
        $wynik = curl_exec($curl);

        if ($wynik === false) {
            exit(3);
        }

        $wyniki = json_decode($wynik, true);


        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200) {
            header('Location: /pojazdy');
           
        } else {
            //tutaj kod obsługi błędu
           header('Location: /pojazdy');
        }
    }

    public function edytujAction($id) {
        

        $naglowki = array(
            "Content-Type: application/json"
        );

        $curl = curl_init();
        if (!$curl) {
            exit(1);
        }
        $opcjeCurl = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "UPDATE",
            CURLOPT_HTTPHEADER => $naglowki,
            CURLOPT_URL => "https://my-json-server.typicode.com/MateuszMalec101/fakePojazdy/pojazdy/$id",
        );
        if (!curl_setopt_array($curl, $opcjeCurl)) {
            exit(2);
        }
        $wynik = curl_exec($curl);

        if ($wynik === false) {
            exit(3);
        }

        $wyniki = json_decode($wynik, true);


        if(curl_getinfo($curl, CURLINFO_HTTP_CODE) == 200) {
            header('Location: /pojazdy/detale/'.$id);
        } else {
            //tutaj kod obsługi błędu
             header('Location: /pojazdy/detale/'.$id);
        }
    }

    private function varDumper($data) {
        echo '<pre>' . var_export($data, true) . '</pre>';
    }

}