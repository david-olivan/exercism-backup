<?php
declare(strict_types=1);

class ResistorColorDuo
{
    public $band_colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    
    public function getColorsValue(array $colors): int
    {
        return (int) (array_search($colors[0], $this->band_colors) . array_search($colors[1], $this->band_colors));
    }
}
