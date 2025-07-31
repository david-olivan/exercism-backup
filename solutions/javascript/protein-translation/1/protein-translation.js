const COD_PROT = {
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP",
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",    
};

export const translate = (str) => {
  let codons;
  try {
    codons =  str.match(/.{1,3}/g);
  } catch (TypeError) {
    return [];
  }
    
    let proteins = [];

    for (let codon of codons) {
        if (COD_PROT[codon] === "STOP") {
            break;
        } else if (COD_PROT[codon] === undefined) {
            throw new Error("Invalid codon");
        } else {
            proteins.push(COD_PROT[codon]);
        }
    }

    return proteins;
};
