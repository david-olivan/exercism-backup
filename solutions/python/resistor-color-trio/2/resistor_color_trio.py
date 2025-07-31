BANDS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

def label(colors: list) -> str:
    """Gives the label associated with a combination of three colours for a resistor
    
    :param colors: The list of colors from which colours will be translated into ohms.
    :return: int - The value of the colours combined into ohms.
    """

    value = (BANDS.index(colors[0]) * 10 + BANDS.index(colors[1])) * 10 ** BANDS.index(colors[2])

    if value >= 10 ** 9: return f"{int(value / 10 ** 9)} gigaohms"
    elif value >= 10 ** 6: return f"{int(value / 10 ** 6)} megaohms"
    elif value >= 10 ** 3: return f"{int(value / 10 ** 3)} kiloohms"        
    return f"{value} ohms"
