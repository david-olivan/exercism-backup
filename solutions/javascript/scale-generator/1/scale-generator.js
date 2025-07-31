/**
* This class allows us to create a Scale, setting a tonic from which two types of scales may
* be constructed. Either a chromatic one or one with intervals, which will also require 
* inputting the intervals themselves
*/
export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  /**
  * Returns a chromatic scale based on the tonic set up in the constructor
  *
  * @returns {string[]} The 12-pitch scale.
  */
  chromatic() {
    const pitches = this.tonic === "F" ? this.PITCHES_FLAT : this.PITCHES_SHARP;
    return pitches.slice(pitches.indexOf(this.tonic)).concat(pitches.slice(0, pitches.indexOf(this.tonic)));
  }

  /**
  * Takes in a certain arrangement of intervals and returns the corresponding scale based
  * on the tonic set up in the constructor.
  *
  * @param {string} A string contaning the intervals that make up the scale (m, M or A).
  * @returns {string[]} An array of strings contaning the pitches of this particular scale.
  */
  interval(intervals) {
    const pitches = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"].includes(this.tonic) ? this.PITCHES_FLAT : this.PITCHES_SHARP;
    let scale = [this.tonic.length === 2 ? this.tonic[0].toUpperCase() + this.tonic[1] : this.tonic.toUpperCase()];
    let currentIndex = pitches.indexOf(scale[0]);
    
    intervals.split("").forEach(interval => {
      currentIndex += this.INTERVALS[interval];
      if (currentIndex > 11) {
        currentIndex -= 12;
      }
      scale.push(pitches[currentIndex]);
    });    

    return scale.slice(0, -1);
  }

  PITCHES_SHARP = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  PITCHES_FLAT = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
  INTERVALS = {"m": 1, "M": 2, "A": 3};
}