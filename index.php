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

    // function get_average($a) {
    //     $result = array_sum($a) / count($a);
    //     return floor($result);
    // }

    // Quarter of the year

    function quarterOf($month) {
    
        if ( $month > 9) {
          return 4;
        } else if ( $month > 6) {
          return 3;
        } else if ( $month > 3) {
          return 2;
        } 
        return 1;
      }

    ?>