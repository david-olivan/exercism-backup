<?php

declare(strict_types=1);

const TRANSLATOR = ["G" => "C", "C" => "G", "T" => "A", "A" => "U"];

function toRna(string $dna): string
{
    $transcription = [];
    foreach (str_split($dna) as $letter) {
        array_push($transcription, TRANSLATOR[$letter]);
    }
    return implode($transcription);
}
