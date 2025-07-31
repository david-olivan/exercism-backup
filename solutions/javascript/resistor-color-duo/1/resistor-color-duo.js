/**
* This function takes a string that represents a color and checks it against a list, giving back its index which is also the numerical value of that color in Transistor code
* 
* @param colors An array with two or more colors to be decoded
* @returns The numerical value associated with each of the first two colors put together as a code
*/
export const decodedValue = (colors) => {
  return Number(
    String(COLORS.indexOf(colors[0])) + 
    String(COLORS.indexOf(colors[1]))
  );
};

/**
* The List that holds all colors used for resistors, each associated with the index that is also the value it represents
*/
export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
  