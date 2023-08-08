<?php
    $lan = $_COOKIE["language"];
    if($lan=='' || $lan=='en')
    {
        include('home.html');
    }
    else{
        include('home_ch.html');
    }
?>