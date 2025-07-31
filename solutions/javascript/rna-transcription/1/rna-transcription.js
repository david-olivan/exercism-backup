/**
* It takes in a string that represents a DNA strand and transcribes it into RNA replacing each nucleotide with its complement
*
* @param {string} dna A string representing a strand of DNA.
* @returns {string} A string representing the strand of RNA with the complements to the nucleotides transcribed.
*/
export const toRna = (dna) => {
  let rna = "";
  [...dna].forEach(c => rna += RNATRANSCRIPTION[c]);
  return rna;
};

/**
* A dictionary in which the keys are the DNA nucleotides and the associated values are the RNA complements
*/
const RNATRANSCRIPTION = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}
