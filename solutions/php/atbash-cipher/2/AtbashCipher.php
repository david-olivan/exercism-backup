<?php

declare(strict_types=1);

/** @var string ABC This is a string contaning the alphabet. */
const ABC = "abcdefghijklmnopqrstuvwxyz";

/**
* This function takes in a string, clears punctuation and spaces, chops it up in groups of 5 and then puts it together and translates it using a reversed alphabet.
* @param string $text This is the text that will be ciphered.
* @return string This is the encoded version of the param.
*/
function encode(string $text): string
{
    $treated_text = strtolower(str_replace([" ", ",", "."], "", $text));
    $treated_text = implode(" ", str_split($treated_text, 5));
    return strtr($treated_text, ABC, strrev(ABC));
}
