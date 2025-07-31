/**
 * Evaluates whether a number is Armstrong number or not
 * 
 * @param {int} n  The number to be evaluated as an Armstrong number
 * @returns {bool} Whether n is an Amrstrong number
 */
export const isArmstrongNumber = n => n === armsCalc(n);

/**
 * Calculates the total sum of the digits of a number elevated to the power of the number of digits
 * 
 * @param {int} n The number to be used
 * @returns {int} The sum of each digit to the power of the number of digits
 */
function armsCalc(n) {
    let sumOfPowers = 0;
    const digits = String(n).split("");

    for (let digit of digits) {
        sumOfPowers += Math.pow(Number(digit), digits.length);
    }
    
    return sumOfPowers
}
