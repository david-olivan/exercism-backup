to_roman = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

def roman(number):
    x = [digit for digit in str(number)]
    roman_number = ""
    
    if len(x) == 1:
        return one_digit(int(x[0]))
    elif len(x) == 2:
        pass
        return two_digit(int(x[0])) + one_digit(int(x[1]))
    elif len(x) == 3:
        return three_digit(int(x[0])) + two_digit(int(x[1])) + one_digit(int(x[2]))
    elif len(x) == 4:
        return four_digit(int(x[0])) + three_digit(int(x[1])) + two_digit(int(x[2])) + one_digit(int(x[3]))
    else:
        raise ValueError("The number is out of bounds.")
        
    return roman_number
    
def one_digit(digit):
    if digit == 9 or digit == 4:
        return to_roman[digit]
    elif digit > 4:
        return to_roman[5] + to_roman[1] * (digit % 5)
    else:
        return digit * to_roman[1]
        
def two_digit(digit):
    if digit == 9 or digit == 4:
        return to_roman[digit * 10]
    elif digit > 4:
        return to_roman[50] + to_roman[10] * (digit % 5)
    else:
        return digit * to_roman[10]
        
def three_digit(digit):
    if digit == 9 or digit == 4:
        return to_roman[digit * 100]
    elif digit > 4:
        return to_roman[500] + to_roman[100] * (digit % 5)
    else:
        return digit * to_roman[100]

def four_digit(digit):
    if digit > 3:
        raise ValueError("Number is too big.")        
    return digit * to_roman[1000]