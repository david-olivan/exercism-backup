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
    let sum = 0;
    for (let i = 0; i <= this.n; i++) {
      sum += i * i;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 0; i <= this.n; i++) {
      sum += i;
    }
    return sum * sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
