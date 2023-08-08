<?php
    $lan = $_COOKIE["language"];
    if($lan=='' || $lan=='en')
    {
        include('pipeline.html');
    }
    else{
        include('pipeline_ch.html');
    }
?>