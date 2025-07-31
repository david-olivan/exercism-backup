def classify(number: int) -> str:
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    
    if number < 1: raise ValueError("Classification is only possible for positive integers.")

    factors = sum([factor for factor in range(1, number) if number % factor == 0])
    return "abundant" if factors > number else "deficient" if factors < number else "perfect"
