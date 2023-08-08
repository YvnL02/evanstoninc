<?php
    $lan = $_COOKIE["language"];
    if($lan=='' || $lan=='en')
    {
        include('service.html');
    }
    else{
        include('service_ch.html');
    }
?>