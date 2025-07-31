/**
 * Converts an int to the roman numerals equivalent 
 * 
 * @param {int} n The number to be converted to roman numerals
 * @returns {string} The number n in roman numerals
 */
export const toRoman = (n) => {
    let str = "";
    let rmd = n;

    // Thousands
    const thousands = Math.trunc(n/1000);
    rmd -= thousands * 1000;
    if (thousands) {
        str += "M".repeat(thousands);
    }

    // Hundreds
    let hundreds = Math.trunc(rmd/100);
    rmd -= hundreds * 100;
    if (hundreds === 9) {
        str += "CM";
    } else if (hundreds > 4) {
        hundreds -= 5;
        str += "D" + "C".repeat(hundreds);
    } else if (hundreds === 4) {
        str += "CD";
    } else {
        str += "C".repeat(hundreds);
    }

    // Tens
    let tens = Math.trunc(rmd/10);
    rmd -= tens * 10;
    if (tens === 9) {
        str += "XC";
    } else if (tens > 4) {
        tens -= 5;
        str += "L" + "X".repeat(tens);
    } else if (tens === 4) {
        str += "XL";
    } else {
        str += "X".repeat(tens);
    }

    // Singles
    if (rmd === 9) {
        str += "IX";
    } else if (rmd > 4) {
        rmd -= 5;
        str += "V" + "I".repeat(rmd);
    } else if (rmd === 4) {
        str += "IV";
    } else {
        str += "I".repeat(rmd);
    }

    return str;
};
