<?php
declare(strict_types=1);

function distance(string $strandA, string $strandB): int
{
    if (strlen($strandA) != strlen($strandB)) throw new \InvalidArgumentException("DNA strands must be of equal length.");

    $count = 0;
    foreach (str_split($strandA) as $key => $letter) {
        if ($letter != str_split($strandB)[$key]) $count++;
    }
    
    return $count;
}
