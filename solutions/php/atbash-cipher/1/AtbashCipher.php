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
    return strtr(
        implode(" ", str_split(strtolower(str_replace([" ", ",", "."], "", $text)), 5)), 
        ABC, 
        strrev(ABC));
}
