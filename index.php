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

    // function quarterOf($month) {
    
    //     if ( $month > 9) {
    //       return 4;
    //     } else if ( $month > 6) {
    //       return 3;
    //     } else if ( $month > 3) {
    //       return 2;
    //     } 
    //     return 1;
    //   }


    // Sort Numbers

    // function solution($nums) {
    //     sort($nums);
    //     return $nums;
    // }

    // Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

    // function adjacentElementsProduct($array) {
    //     $max = null;
    //     for ($i=0; $i < count($array); $i++) {           
    //         if ( !(($i + 1) >= count($array))) {
    //             if ( $array[$i] * $array[$i + 1] > $max ) {
    //                 $max = $array[$i] * $array[$i + 1];
                    
    //             }
    //         } else {
    //             return $max;
    //         }    
    //     }
    //     return $max;
    // }

    // Cat and Mouse - Easy Version

    // function cat_mouse(string $s): string {
    //     if (substr_count( $s, '.') > 3)
    //     {
    //       return "Escaped!";
    //     }
    //     return "Caught!";
    // }
    $x = 43278;
    $y = str_split($x);
    $len = count($y);
    var_dump($y);
    $result =[] ;
    for ($i=0; $i < $len; $i++) { 
        $result[] = max($y);
        var_dump($pos = array_search(max($y), $y));
        var_dump($y);
        array_splice($y, $pos);
    }
    var_dump($result);
?>