def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b): raise ValueError("Strands must be of equal length.")

    counter = 0
    for x in range(len(strand_a)):
        if strand_a[x] != strand_b[x]:
            counter += 1

    return counter
