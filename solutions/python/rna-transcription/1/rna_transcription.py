COMPLEMENTS = {"G": "C", "C": "G", "T": "A", "A": "U"}

def to_rna(dna_strand):
    """Transforms a DNA strand into the complements

    :param dna_strand: The strand to be transformed into the complements.
    :return: str - The complements of the SNA strand.
    """
    
    return "".join( [COMPLEMENTS[letter] for letter in dna_strand] )
