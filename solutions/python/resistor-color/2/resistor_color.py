def color_code(color):
    """Calls a function that lists all colours and returns the index (value) of the band in that colour
    
    :param color: The color for the band that we want to check its value.
    :return: int - The value of that band.
    """
    
    return colors().index(color)


def colors():
    """Gives a list of all the resistor band colours
    
    :return: list - The list of resistor colours ordered by the associated values (given the index).
    """
    
    return ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
