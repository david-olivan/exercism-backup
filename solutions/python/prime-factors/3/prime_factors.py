def factors(value: int) -> list[int]:
    """Calculates all the prime factors of a number
    
    :param value: The number whose factors will be calculated.
    :return: list[int] - The list with all the numbers that make up the prime factors.
    """
    
    prime_list, number = [], 2

    while value > 1:
        if value % number == 0:
            prime_list.append(number)
            value /= number
        else:
            number += 1

    return prime_list
            