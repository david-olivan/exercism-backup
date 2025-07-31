/**
* Either gives a cookie to a named person or to 'you'
* @param {string} nombre - The name of the other person when known
* @returns {string} - The formatted string of giving cookies
* @example
* twoFer("Alice"); // Output: "One for Alice, one for me."
*/
export function twoFer(nombre = "you"): string {
  return `One for ${nombre}, one for me.`
}
