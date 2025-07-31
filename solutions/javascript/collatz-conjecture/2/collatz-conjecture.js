/**
* Calculates the number of steps it takes a certain number to reach 1 as per the Collatz Conjecture
*
* @param {number} n A candidate to be reduce to 1 using Collatz.
* @returns {number} The number of steps it takes to reach 1 using Collatz.
*/
export const steps = (n) => {
  if (n < 1) throw new Error("Only positive numbers are allowed");
  for (var steps = 0; n != 1; steps++) n % 2 == 0 ? n /= 2 : n = 3 * n + 1;
  return steps;
};
