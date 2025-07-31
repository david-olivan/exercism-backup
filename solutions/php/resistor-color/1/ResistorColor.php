<?php
declare(strict_types=1);

/**
* Gets all the colours associated with resistors
* @return array<string> The list of colours.
*/
function getAllColors(): array
{
    return ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
}

/**
* Looks up the value associated to the colour of the resistor
* @param string $color The colour that is to be consulted.
* @return int The value associated to the colour.
*/
function colorCode(string $color): int
{
    return array_search($color, getAllColors());
}
