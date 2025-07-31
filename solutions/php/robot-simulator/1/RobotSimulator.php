<?php

declare(strict_types=1);

class Robot
{
    const DIRECTION_NORTH = "north";
    const DIRECTION_EAST = "east";
    const DIRECTION_SOUTH = "south";
    const DIRECTION_WEST = "west";
    
    /**
     *
     * @var int[]
     */
    public $position;

    /**
     *
     * @var string
     */
    public $direction;

    public function __construct(array $position, string $direction)
    {
        $this->position = $position;
        $this->direction = $direction;
    }

    public function instructions(string $input)
    {
        foreach (str_split($input) as $letter) {
            if (!in_array($letter, ["L", "R", "A"])) {
                throw new \InvalidArgumentException("Implement the instructions method");
            }

            switch ($letter) {
                case "A":
                    $this->advance();
                    break;
                case "R":
                    $this->turnRight();
                    break;
                case "L":
                    $this->turnLeft();
                    break;
            }
        }        
    }

    public function turnRight()
    {
        switch ($this->direction) {
            case self::DIRECTION_NORTH:
                $this->direction = self::DIRECTION_EAST;
                break;
            case self::DIRECTION_EAST:
                $this->direction = self::DIRECTION_SOUTH;
                break;
            case self::DIRECTION_SOUTH:
                $this->direction = self::DIRECTION_WEST;
                break;
            case self::DIRECTION_WEST:
                $this->direction = self::DIRECTION_NORTH;
                break;
        }
        return $this;
    }

    public function turnLeft()
    {
        switch ($this->direction) {
            case self::DIRECTION_NORTH:
                $this->direction = self::DIRECTION_WEST;
                break;
            case self::DIRECTION_EAST:
                $this->direction = self::DIRECTION_NORTH;
                break;
            case self::DIRECTION_SOUTH:
                $this->direction = self::DIRECTION_EAST;
                break;
            case self::DIRECTION_WEST:
                $this->direction = self::DIRECTION_SOUTH;
                break;
        }
        return $this;
    }

    public function advance()
    {
        switch ($this->direction) {
            case self::DIRECTION_NORTH:
                $this->position[1]++;
                break;
            case self::DIRECTION_EAST:
                $this->position[0]++;
                break;
            case self::DIRECTION_SOUTH:
                $this->position[1]--;
                break;
            case self::DIRECTION_WEST:
                $this->position[0]--;
                break;
        }

        return $this;
    }
}
