def is_prime_num(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


def prime_numbers(start, end):
    for num in range(start, end + 1):
        if is_prime_num(num):
            yield num


PRIMES = [prime for prime in prime_numbers(1, 900000)]

def factors(value):
    prime_factors = []
    i = 0

    while True:
        if value == 1:
            break
        if value % PRIMES[i] == 0:
            prime_factors.append(PRIMES[i])
            value /= PRIMES[i]
        else:
            i += 1

    return prime_factors
