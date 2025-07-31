/**
 * This function takes a string that represents a color and checks it against a list, giving back its index which is also the numerical value of that color in Transistor code
 * 
 * @param color The name of the color to be consulted
 * @returns The numerical value associated to the color
 */
export const colorCode = (color) => {
    return COLORS.indexOf(color);
  };
  
  /**
   * The List that holds all colours used for resistors, each associated with the index that is also the value it represents
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
  