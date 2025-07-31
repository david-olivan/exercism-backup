def score(x: float, y: float) -> int:
    """It takes a set of Cartesian coordinates representing a dart throw and calculates the score
    
    :param x: The coordinate on the x axis.
    :param y: The coordinate on the y axis.
    :return: int - The score associated with that throw.
    """
    
    distance = (x**2 + y**2) ** 0.5

    return (distance <= 1) * 10 + (1 < distance <= 5) * 5 + (5 < distance <= 10) * 1 + 0