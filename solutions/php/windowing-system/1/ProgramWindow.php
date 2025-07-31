<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;

    function __construct() {
        $this->x = 0;
        $this->y = 0;
        $this->width = 800;
        $this->height = 600;
    }

    function resize($new_size) {
        $this->width = $new_size->width;
        $this->height = $new_size->height;
    }

    function move($new_pos) {
        $this->y = $new_pos->y;
        $this->x = $new_pos->x;
    }
}
