namespace eval resistorColor {
    proc colorCode {args} {
        if {$args == "black"} {return 0}
        if {$args == "brown"} {return 1}
        if {$args == "red"} {return 2}
        if {$args == "orange"} {return 3}
        if {$args == "yellow"} {return 4}
        if {$args == "green"} {return 5}
        if {$args == "blue"} {return 6}
        if {$args == "violet"} {return 7}
        if {$args == "grey"} {return 8}
        if {$args == "white"} {
            return 9
        } else {return -code error "Invalid color: $args"}
    }

    proc colors {args} {
        return "black brown red orange yellow green blue violet grey white"
    }
}
