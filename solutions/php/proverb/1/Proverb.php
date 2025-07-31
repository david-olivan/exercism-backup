<?php

declare(strict_types=1);

class Proverb
{
    public function recite(array $words) : array
    {
        if ($words === []) return [];
        
        $proverb = [];
        for ($i = 0; $i < count($words ) - 1; $i++) {
            $new_i = $i + 1;
            array_push($proverb, "For want of a $words[$i] the $words[$new_i] was lost.");
        }
        
        array_push($proverb, "And all for the want of a $words[0].");
            
        return $proverb;
    }
}
