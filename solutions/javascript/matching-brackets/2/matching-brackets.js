const bracketPairings = {
    "{": "}",
    "[": "]",
    "(": ")",
};

/**
 * Evaluates a string for brackets pairings and proper nesting
 * 
 * @param {string} str 
 * @returns {bool} if all brackets are properly used returns true
 */
export const isPaired = (str) => {
    let strArray = str.split("");
    
    // Loop through all the characters and store the brackets
    let listOfBrackets = [];
    for (let i in strArray) {
        const char = strArray[i];
        const arrayLen = listOfBrackets.length;

        // Use push and pop to add at the end and take from the array
        if (char === ")" || char === "]" || char === "}") {
            if (arrayLen === 0) {
                // If array length is 0 and we encounter an end bracket, we're done
                return false;
            } else if (char === bracketPairings[listOfBrackets[arrayLen - 1]]) {
                // We found an appropriate closing bracket
                listOfBrackets.pop();
            } else {
                // It's a mismatched bracket, get out
                return false;
            }
        } else if (char === "(" || char === "[" || char === "{") {
            // It's an opening bracket, add it
            listOfBrackets.push(char);
        }
    }

    // If the array with the brackets is length 0 then there are no unpaired brackets
    return listOfBrackets.length === 0 ? true : false;
};
