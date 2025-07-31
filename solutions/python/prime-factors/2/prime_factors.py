def factors(value):
    prime_list, number = [], 2

    while value > 1:
        if value % number == 0:
            prime_list.append(number)
            value /= number
        else:
            number += 1

    return prime_list
            