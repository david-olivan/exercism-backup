def convert(number):  
    """Takes in a number and converts it to a string depending on the Raindrop rules
    
    :param number: The number to be evaluated and converted
    :return: str - Either the Raindrop string or the digits of the number if it doesn't have a factor in 3, 5 or 7
    """

    return "".join(("Pling" if number % 3 == 0 else "",
                    "Plang" if number % 5 == 0 else "",
                    "Plong" if number % 7 == 0 else "")) or str(number)
