BANDS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

def value(colors: list) -> int:
    """Gives the value of the first two colors from the input list
    
    :param colors: The list of colors from which the first two will be translated into the code.
    :return: int - The value of the first two colors combined.
    """
    
    return BANDS.index(colors[0]) * 10 + BANDS.index(colors[1])
