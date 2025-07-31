/**
* Takes in a word and a list of potential anagrams and returns those elements that were
* indeed anagrams of the word
*
* @param {string} w The word whose anagrams the function will spit out.
* @param {string[]} anagrams The potential anagrams to be evaluated.
* @returns {string[]} The actual elements of anagrams that were anagrams of w.
*/
export const findAnagrams = (w, anagrams) => anagrams.filter(word => w.toLowerCase() != word.toLowerCase() && [...w.toLowerCase()].sort().join("") == [...word.toLowerCase()].sort().join(""));