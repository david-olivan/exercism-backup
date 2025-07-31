def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    
    if not number > 0: raise ValueError("Classification is only possible for positive integers.")

    factors = []

    for factor in range(1, number):
        if number % factor == 0:
            factors.append(factor)

    if sum(factors) == number:
        return "perfect"
    else:
        return "abundant" if sum(factors) > number else "deficient"
