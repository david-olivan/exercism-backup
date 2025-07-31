/**
* This class defines a natural number N and then calculates the sum of the 
* squares of all the natural numbers from 0 to N, calculates the square
* of the sum of all the natural numbers from 0 to N and the difference
* between those two values.
*/
export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum() {
    return (this.n / 2 * (1 + this.n)) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
