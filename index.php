<?php


    // Build a square
    // function generateShape($int) {
    //     $row = "";
        
    //     for ($i=0; $i < $int; $i++) { 
    //     $row .= "+";
    //     }
    //     $string = $row;
    //     for ($i=0; $i < $int - 1; $i++) { 
    //     $string .= "/n" . $row;
    //     }
    //     return $string;
    // }


    // Remove exlamation marks
    // function remove_exclamation_marks($string) {
    //     return str_replace('!', "", $string);
    // }


    // Get the mean og an array 

    function get_average($a) {
        $result = array_sum($a) / count($a);
        return floor($result);
    }

    ?>