"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers):
    """Calculate the minutes spent preparing the layers

    :param number_of_layers: int - the number of layers prepared.
    :return: int - the amount of preparation time (in minutes) derived from 'PREPARATION_TIME'.

    Function that takes the number of layers prepared for the lasagna and returns the number of minutes spent in that preparation based on the `PREPARATION_TIME`.
    """

    return PREPARATION_TIME * number_of_layers


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the total number of minutes in cooking

    :param number_of_layers: int - the number of layers prepared.
    :param elapsed_bake_time: int - the number of minutes the lasagna has been baking in the oven.
    :returns: int - the total cooking time.

    Function that takes the number of layers prepared and the time elapsed in the oven and returns the total number of minutes you've been cooking.
    """

    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
    