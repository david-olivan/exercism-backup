/**
* It takes in a word and evaluates whether it is an isogram
*
* @param {string} word The word to be evaluated.
* @returns {boolean} Whether the word is an isogram or not.
*/
export const isIsogram = (word) => {
  word = word.replace(/[- ]/g, "");
  const setLetters = new Set();
  word.toLowerCase().split("").forEach(letter => setLetters.add(letter));
  return word.length == setLetters.size;
};
