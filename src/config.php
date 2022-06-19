<?php

    $config = array(
        "db" => array (
            "db1" => array (
                "dbname" => "simple_auth",
                "username" => "root",
                "password" => "",
                "host" => "localhost"
            )
        ),
        "urls" => array(
            "baseUrl" => "http://localhost"
        ),
        "paths" => array(
            // "resources" => "/path/to/resources",
            "images" => array(
                "content" => $_SERVER["DOCUMENT_ROOT"] . "/images/content",
                "layout" => $_SERVER["DOCUMENT_ROOT"] . "/images/layout"
            )
        )


    );


    defined("LIBRARY_PATH")
    or define("LIBRARY_PATH", realpath(dirname(__FILE__) . '/library'));
     
    defined("TEMPLATES_PATH")
    or define("TEMPLATES_PATH", realpath(dirname(__FILE__) . '/templates'));
    
    // ini_set("error_reporting", "true");
    // error_reporting(0);

?>