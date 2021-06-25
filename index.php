<?php


    // Build a square
    function generateShape($int) {
        $row = "";
        
        for ($i=0; $i < $int; $i++) { 
        $row .= "+";
        }
        $string = $row;
        for ($i=0; $i < $int - 1; $i++) { 
        $string .= "/n" . $row;
        }
        return $string;
    }

    ?>