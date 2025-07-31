def is_armstrong_number(number):
    """Takes in a number and assesses whether it is an armstrong number or not
    
    :param number: The number to be evaluated.
    :return: bool - Whether the number is an armstrong number or not
    """

    digits = tuple(str(number))

    suma = 0
    for count, digit in enumerate(digits):
        suma += int(digit) ** len(digits)

    return number == suma
