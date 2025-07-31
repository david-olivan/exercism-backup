interface Translator {
  [key: string]: string
}

const DNA_TRANSLATOR: Translator = {G: "C", C: "G", T: "A", A: "U"}

export function toRna(old_dna: string) {
  let new_dna: string = ""
  for (const char of old_dna) {
    if (!"GCTA".includes(char)) {
      throw "Invalid input DNA."
    }
    new_dna += DNA_TRANSLATOR[char];
  }

  return new_dna;
}
