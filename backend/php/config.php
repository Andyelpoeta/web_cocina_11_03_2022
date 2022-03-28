<?php
    define ('dominio',(string)'web_cocina_11_03_2022/');
    define ('host', (string)"backend/");
    define ('carpeta', (string)'json/');
    $ruta=(string ) $_SERVER [ "REQUEST_SCHEME" ]."://".$_SERVER ["HTTP_HOST"]."/".dominio.host.carpeta;
    $abrir= function(String $archivo) use($ruta): object{
        return( object ) json_decode(file_get_contents( $ruta.$archivo ));
    };
?>