<?php
declare(strict_types=1);

class Robot
{
    const DIRECTION_NORTH = "N";
    const DIRECTION_EAST = "E";
    const DIRECTION_SOUTH = "S";
    const DIRECTION_WEST = "W";
    const DIRECTIONS = ["N", "E", "S", "W"];
    
    /**
     * The position in which the Robot is in [x, y]
     * @var int[]
     */
    protected $position;

    /**
     * The direction in which the Robot is facing
     * @var string
     */
    protected $direction;

    public function __construct(array $position, string $direction)
    {
        $this->position = $position;
        $this->direction = $direction;
    }

    public function __get(string $property): array|string
    {
        if ($property == "position") return $this->position;
        if ($property == "direction") return $this->direction;
    }

    /**
    * It takes in a string, splits it into letters and execute each letter as a turn or a move, raising an exception if any of the letters is not a valid instruction
    * @param string $input The string with all the instructions
    * @return self
    */
    public function instructions(string $input): self
    {
        foreach (str_split($input) as $letter) {
            if (!in_array($letter, ["L", "R", "A"])) throw new \InvalidArgumentException("Implement the instructions method");

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
        return $this;
    }

    /**
    * It turns the Robot once to the right of its current facing
    * @return self
    */
    public function turnRight(): self
    {
        $current_direction = array_search($this->direction, self::DIRECTIONS);
        $this->direction = self::DIRECTIONS[($current_direction == 3) ? 0 : $current_direction + 1];
        return $this;
    }

    /**
    * It turns the Robot once to the left of its current facing
    * @return self
    */
    public function turnLeft(): self
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

    /**
    * It makes the Robot advance once into the direction it is facing
    * @return self
    */
    public function advance(): self
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
