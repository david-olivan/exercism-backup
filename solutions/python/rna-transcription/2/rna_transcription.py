TRANSLATOR = str.maketrans("GCTA", "CGAU")

def to_rna(dna_strand):
    """Transforms a DNA strand into the complements

    :param dna_strand: The strand to be transformed into the complements.
    :return: str - The complements of the SNA strand.
    """
    
    return dna_strand.translate(TRANSLATOR)
