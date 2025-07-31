BANDS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

def label(colors: list) -> str:
    """Gives
    
    :param colors: The list of colors from which colours will be translated into ohms.
    :return: int - The value of the colours combined into ohms.
    """

    value = (BANDS.index(colors[0]) * 10 + BANDS.index(colors[1])) * 10 ** BANDS.index(colors[2])
    unit = "ohms"
    if value >= 1000:
        value /= 1000
        unit = "kiloohms"
    if value >= 1000:
        value /= 1000
        unit = "megaohms"
    if value >= 1000:
        value /= 1000
        unit = "gigaohms"
    return f"{int(value)} {unit}"
