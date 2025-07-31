def distance(strand_a: str, strand_b:str) -> int:
    """Compares two strands of DNA and calculates the Hamming Distance
    
    :param strand_a: The first strand of DNA.
    :param strand_b: The second strand of DNA.
    :return: int - The Hamming Distance."""
    
    if len(strand_a) != len(strand_b): raise ValueError("Strands must be of equal length.")

    return sum(letter_a != letter_b for letter_a, letter_b in zip(strand_a, strand_b))
