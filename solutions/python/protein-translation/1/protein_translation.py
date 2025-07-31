TRANSLATOR = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine", "UUC": "Phenylalanine",
    "UUA": "Leucine", "UUG": "Leucine",
    "UCU": "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine",
    "UAU": "Tyrosine", "UAC": "Tyrosine",
    "UGU": "Cysteine", "UGC": "Cysteine",
    "UGG": "Tryptophan"
}
STOP = ["UAA", "UAG", "UGA"]


def proteins(strand):
    proteins = []
    for codon in [strand[i:i+3] for i in range(0, len(strand), 3)]:
        if codon in STOP: break
        proteins.append(TRANSLATOR[codon])

    return proteins
    