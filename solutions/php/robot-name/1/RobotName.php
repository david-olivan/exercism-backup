<?php

declare(strict_types=1);

class Robot
{
    public static array $robotIDs = [];
    public string $name;

    public function __construct()
    {
        $this->name = $this->generateName();
    }

    /**
    * It returns the name stored in the variable of the class.
    * @return string The current name of the robot.
    */
    public function getName(): string
    {
        return $this->name;
    }

    /**
    * It resets the name of the current robot to a new generated name. It does not eliminate that name from the "database" as one that has been used before to prevent recycling.
    */
    public function reset(): void
    {
        $this->name = $this->generateName();
    }

    /**
    * It generates a unique random string composed of 2 letters and 3 digits that has not been used by a robot before.
    * @return string The unique robot identifier.
    */
    function generateName(): string
    {
        $new_name = chr(rand(65, 90)) . chr(rand(65, 90)) . rand(100, 999);     
        (in_array($new_name, self::$robotIDs))
            ? $new_name = $this->generateName()
            : array_push(self::$robotIDs, $new_name);
        
        return $new_name;
    }
}
