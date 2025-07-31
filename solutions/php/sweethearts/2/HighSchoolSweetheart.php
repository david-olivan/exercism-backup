<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr(trim($name), 0, 1);
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
        $partes = explode(" ", $name);
        return $this->initial($partes[0]) . " " . $this->initial($partes[1]);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);
        
        return<<<END
                 ******       ******
               **      **   **      **
             **         ** **         **
            **            *            **
            **                         **
            **     $initials_a  +  $initials_b     **
             **                       **
               **                   **
                 **               **
                   **           **
                     **       **
                       **   **
                         ***
                          *
            END;
    }
}
