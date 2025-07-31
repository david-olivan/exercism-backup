<?php
declare(strict_types=1);

const TO_RNA = ["G" => "C", "C" => "G", "T" => "A", "A" => "U"];

function toRna(string $dna): string
{
    return strtr($dna, TO_RNA);
}
