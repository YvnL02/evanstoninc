<?php
    $lan = $_COOKIE["language"];
    if($lan=='' || $lan=='en')
    {
        include('about.html');
    }
    else{
        include('about_ch.html');
    }
?>