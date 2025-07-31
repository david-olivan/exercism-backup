def steps(number):
    """It takes in a number and the applies the Collatz conjecture calculating how many steps it takes to get to one
    :param number: The number to be used for the conjecture.
    :return: int - The amount of steps it takes to reduce to one.
    """

    if number <= 0: raise ValueError("Only positive integers are allowed")

    steps = 0
    while number != 1:
        steps += 1
        number = number / 2 if number % 2 == 0 else number * 3 + 1

    return steps
