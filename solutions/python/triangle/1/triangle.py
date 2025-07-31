def equilateral(sides):
    """Check to see if a triangle is equilateral

    :param sides: the three sides of a triangle.
    :return: bool - whether the triangle is equilateral.
    """

    return sides[0] == sides[1] == sides[2] if check_if_triangle(*sides) else False


def isosceles(sides):
    """Check to see if a triangle is isosceles
    
    :param sides: the three sides of the triangle.
    :return: bool - whether the triangle is isosceles.
    """

    return sides[0] == sides[1] or sides[0] == sides[2] or sides[1] == sides[2] if check_if_triangle(*sides) else False


def scalene(sides):
    """Check to see if a triangle is scalene
    
    :param sides: the three sides of the triangle.
    :return: bool - whether the triangle is scalene.
    """

    return sides[0] != sides[1] != sides[2] != sides[0] if check_if_triangle(*sides) else False

def check_if_triangle(a, b, c):
    """Check if given sides are part of a triangle.
 
    :param sides: the three sides of a triangle.
    :return: bool - whether the sides are a triangle or not.
    """

    return False if 0 in (a, b, c) else a + b >= c and b + c >= a and a + c >= b