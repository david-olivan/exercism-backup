/**
* It takes in a string, spreading it to an array, then uses built-in methods to reverse
* and join back the array into a string to return it.
*
* @param {string} text The text to be reversed.
* @returns {string} The reversed text.
*/
export const reverseString = ([...text]) => text.reverse().join("");
