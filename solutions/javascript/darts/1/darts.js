/**
* Gives the score achieved by a darts player based on real cartesian coordinates and three
* concentric circles of 1, 5 and 10 radius.
*
* @param {Number} x The position in the x axis.
* @param {Number} y The position in the y axis.
* @returns {Number} The amount of points achieve by the throw
*/
export const score = (x, y) => {
  const distance = Math.sqrt(x**2 + y**2);
  if (distance <= 1) {
      // Inner circle
      return 10;
  } else if (distance <= 5) {
    // Middle circle
      return 5;
  } else if (distance <= 10) {
    // External circle
      return 1;
  }
  return 0;
};
