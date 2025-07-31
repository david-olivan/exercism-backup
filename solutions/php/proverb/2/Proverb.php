<?php

declare(strict_types=1);

class Proverb
{
    /**
    * It takes in a list of words and recites a proverb using as many lines as needed for that list.
    * @param array<string> $words A list of the words that will be used in the proverb.
    * @return array<string> An array with the verses of the proverb.
    */
    public function recite(array $words) : array
    {
        if (count($words) == 0) return [];
        
        $proverb = [];
        for ($i = 0; $i < count($words); $i++) {
            ($i == count($words) - 1) 
                ? array_push($proverb, "And all for the want of a $words[0].") 
                : array_push($proverb, "For want of a {$words[$i]} the {$words[$i + 1]} was lost.");
        }
        return $proverb;
    }
}
