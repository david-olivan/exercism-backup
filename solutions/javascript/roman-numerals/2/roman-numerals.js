const NUMERALS = {
    units: {9: "IX", 5: "V", 1: "I"},
    tens: {9: "XC", 5: "L", 1: "X"},
    hundreds: {9: "CM", 5: "D", 1: "C"},
    thousands: "M",
};

/**
 * Converts an int to the roman numerals equivalent 
 * 
 * @param {int} n The number to be converted to roman numerals
 * @returns {string} The number n in roman numerals
 */
export const toRoman = (n) => {
    const places = extractDigits(n);

    return (
        translate(places[0], "thousands") +
        translate(places[1], "hundreds") +
        translate(places[2], "tens") +
        translate(places[3], "units")
    );
};

/**
 * Uses the Math.trunc and a loop to extract the digits of a number of no more than 4 digits
 * 
 * @param {int} n  The number whose digits are going to be extracted
 * @returns {int[]} Array with each digit extracted
 */
function extractDigits(n) {
    let tmp = [];
    for (let i = 0; i < 3; i++) {
        tmp.push(Math.trunc(n/10**(3-i)));
        n -= tmp[i] * 10**(3-i);
    }
    tmp.push(n);
    return tmp;
}

/**
 * Takes a digit and a place in the original number of no more than 4 digits and translates that into roman numerals
 * 
 * @param {int} digit The digit that informs the translation to roman numerals
 * @param {string} place The places within the original number of the digit
 * @returns {string} The roman numeral equivalent to the digit in that particular places
 */
function translate(digit, place) {
    if (place === "thousands") {
        return NUMERALS[place].repeat(digit);
    } else {
        if (digit === 9) {
            return NUMERALS[place][9];
        } else if (digit === 4) {
            return NUMERALS[place][1] + NUMERALS[place][5];
        } else if (digit > 4) {
            return NUMERALS[place][5] + NUMERALS[place][1].repeat(digit - 5);
        } else {
            return NUMERALS[place][1].repeat(digit);
        }
    }
}
