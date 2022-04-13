<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    
    require 'config.php';
    $json = (object) [];

    $json->menu = (object) $abrir(
        archivo: "menu.json"
    );
    $json->inicio = (object) $abrir(
        archivo: "inicio.json"
    );
    $json->ourMenu = (object) $abrir(
        archivo: "ourMenu.json"
    );
    $json->ourKitchenExpert = (object) $abrir(
        archivo: "ourKitchenExpert.json"
    );
    $json->theySaidAboutUs = (object) $abrir(
        archivo: "theySaidAboutUs.json"
    ); 
    $json->aboutUs = (object) $abrir(
        archivo: "aboutUs.json"
    );
    $json->contaCto = (object) $abrir(
        archivo: "contaCto.json"
    );
    echo json_encode($json, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>