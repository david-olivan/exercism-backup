def square(number):
    """It takes in a number between 1 and 64 and calculates the amount of grains in that square of the chessboard
    
    :param number: The number identifying the square of the chessboard
    :return: int - The number of grains on that square
    """    
    
    if not (1 <= number <= 64): raise ValueError("square must be between 1 and 64")

    count = 1
    for square in range(number - 1):
        count *= 2

    return count
        


def total():
    """It calculate the total number of grains on a chessboard as they double
    
    :return: int - The total number of grains on the board
    """

    total_count = 0
    for number in range(64):
        total_count += square(number + 1)

    return total_count
