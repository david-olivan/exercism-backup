export const isArmstrongNumber = (n) => {
    return n === armsCalc(n);
};

function armsCalc(n) {
    let sumOfPowers = 0;
    const digits = String(n).split("");

    for (let digit of digits) {
        sumOfPowers += Math.pow(Number(digit), digits.length);
    }
    
    return sumOfPowers
}
