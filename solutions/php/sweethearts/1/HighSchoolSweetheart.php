<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr(trim($name), 0, 1);
    }

    public function initial(string $name): string
    {
        return strtoupper(HighSchoolSweetheart::firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
        $partes = explode(" ", $name);
        return HighSchoolSweetheart::initial($partes[0]) . " " . HighSchoolSweetheart::initial($partes[1]);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = HighSchoolSweetheart::initials($sweetheart_a);
        $initials_b = HighSchoolSweetheart::initials($sweetheart_b);
        
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
