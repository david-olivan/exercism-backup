<?php

declare(strict_types=1);

class ResistorColorTrio
{
    public $band_colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    
    public function label(array $colors): string
    {
        $first_number = array_search($colors[0], $this->band_colors);
        $second_number = array_search($colors[1], $this->band_colors);
        $third_number = array_search($colors[2], $this->band_colors);

        $numero = (int) ($first_number . $second_number . str_repeat("0", $third_number));

        switch ($numero) {
            case ($numero < 1000):
                return $numero . " ohms";
            case ($numero < 1000000):
                return ($numero / 1000) . " kiloohms";
            case ($numero < 1000000000):
                return ($numero / 1000000) . " megaohms";
            case ($numero < 1000000000000):
                return ($numero / 1000000000) . " gigaohms";
            default:
                return $numero . " ohms";
        }
        
        return (string) $numero;
    }
}
