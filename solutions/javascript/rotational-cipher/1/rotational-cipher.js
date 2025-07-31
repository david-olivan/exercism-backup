/**
 * It takes in a string and a rotation value (default 0) and then applies the Caesar cipher with that value
 * 
 * @param {string} str The message to be scrambled or unscrambled
 * @param {int} rot The number of spaces to be rotated
 * @returns The new string that has be ciphered or deciphered
 */
export const rotate = (str, rot=0) => {
    let newStr = "";
    // Loop through the string
    for (let char of str) {
        // Continue only if it is a letter
        if (/^[a-z]+$/.test(char)) {
            // If it goes beyond the bounds (97-122), loop back
            const code = char.charCodeAt(0) + rot;
            newStr += String.fromCharCode(code > 122 ? code - 26 : code);
        } else if (/^[A-Z]+$/.test(char)) {
            // If it goes beyond the bounds (65-90), loop back
            const code = char.charCodeAt(0) + rot;
            newStr += String.fromCharCode(code > 90 ? code - 26 : code);
        } else {
            newStr += char;
        }
    }

    return newStr;
};