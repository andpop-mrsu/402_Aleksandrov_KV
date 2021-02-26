<?php

namespace App\Test;

use App\Fraction;

function runTest()
{
    $m1 = new Fraction(10, 40);
    echo $m1 . "\n";     // 1/4

    $m2 = new Fraction(1, 8);
    $m3 = $m1->add($m2);
    echo $m3 . "\n";      // 3/8

    $m4 = new Fraction(5, 32);
    $m5 = $m4->sub($m2);
    echo $m5 . "\n";     // 1/32

    $m6 = new Fraction(-17, 12);
    $m7 = $m1->sub($m6);
    echo $m7 . "\n"; // 1|2/3

    $m8 = new Fraction(41, 18);
    $m9 = $m7->add($m8);
    echo $m9 . "\n";     // 3|17/18

    echo $m9->getNumer() . "\n"; //71
    echo $m9->getDenom() . "\n"; //18

    $m10 = new Fraction(10, 0); // Введите знаменатель больше 0
}
