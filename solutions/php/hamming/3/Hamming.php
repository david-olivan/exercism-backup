<?php
declare(strict_types=1);

function distance(string $strandA, string $strandB): int
{
    return (strlen($strandA) != strlen($strandB)) 
        ? throw new \InvalidArgumentException("DNA strands must be of equal length.") 
        : count(array_diff_assoc(str_split($strandA), str_split($strandB)));
}
