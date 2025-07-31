def square_of_sum(number: int) -> int:
    """It calculates the square of the sum of the natural numbers up to n.

    :param number: The n part of the equation. Last natural number.
    :return: int - The square of the sum of natural numbers up to n.
    """
    
    return (number * (number + 1) / 2) ** 2

def sum_of_squares(number: int) -> int:
    """It calculates the sum of all squares of natural numbers up to n.
    
    :param number: The n part of the equation.
    :return: int - The sum of all squares of natural number up to n.
    """
    
    return number * (number + 1) * (2 * number + 1) / 6
 
def difference_of_squares(number: int) -> int:
    """It calculates the difference between the square of the sum up to n minus the sum of the squares up to n.
    
    :param number: The n part of the equation.
    :return: int - The difference between square of the sum and sum of the squares.
    """
        
    return square_of_sum(number) - sum_of_squares(number)
