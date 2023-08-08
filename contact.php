<?php
    $lan = $_COOKIE["language"];
    if($lan=='' || $lan=='en')
    {
        include('contact.html');
    }
    else{
        include('contact_ch.html');
    }
?>