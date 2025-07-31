<?php

declare(strict_types=1);

class HighScores
{
    public array $scores;
    public int $latest;
    public int $personalBest;
    public array $personalTopThree;
    
    public function __construct(array $scores)
    {
        $this->scores = $scores;
        $this->latest = $this->get_last_score();
        $this->personalBest = $this->highest_score($this->sorted($scores));
        $this->personalTopThree = $this->top_three_scores($this->sorted($scores));
    }

    public function get_last_score() {
        return array_slice($this->scores, -1)[0];
    }

    public function highest_score($scores) {
        return $scores[0];
    }

    public function top_three_scores($scores) {
        return (count($scores) > 2) ? [$scores[0], $scores[1], $scores[2]] : $scores;
    }

    public function sorted($scores) {
        rsort($scores);
        return $scores;
    }
    
}
