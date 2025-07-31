/**
* This function takes a sentence, analyses it and returns whether it is a pangram or not (i.e. it contains at least each letter of the alphabet once).
*
* @params {string} sentence The sentence that is being checked as a pangram
* @returns {bool} Whether the sentence is a pangram
*/
export const isPangram = (sentence) => {
  const alphabet = new Set();
  [...sentence.replace(/[^a-z]/ig, "")].forEach(c => alphabet.add(c.toLowerCase()));
  return alphabet.size === 26;
};
