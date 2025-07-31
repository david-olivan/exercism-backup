/**
* A class to manage High Scores
*/
export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this.scores.pop();
  }

  get personalBest() {
    return this.sortedScores()[0];
  }

  get personalTopThree() {
    return this.sortedScores().slice(0, 3);
  }

  sortedScores() {
    let tmp = this.scores;
    tmp.sort(function(a, b) {
      return b - a;
    });
    return tmp;
  }
}
