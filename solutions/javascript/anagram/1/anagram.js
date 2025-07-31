
export const findAnagrams = (originalWord, potentialAnagrams) => {
  let theAnagrams = [];
  originalWord = originalWord.toLowerCase();
  
  for (let i in potentialAnagrams) {
    const word = potentialAnagrams[i];

    if (originalWord !== word.toLowerCase() && originalWord.length === word.length) {
      let array1 = originalWord.split("");
      let array2 = word.toLowerCase().split("");

      let word1 = array1.sort().join("");
      let word2 = array2.sort().join("");

      if (word1 === word2) {
        theAnagrams.push(word);
      }
    }
  }

  return theAnagrams;
};