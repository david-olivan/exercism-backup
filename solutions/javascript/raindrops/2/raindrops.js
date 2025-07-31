//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (numberIntroduced) => {
  let raindrops = "";
  if (numberIntroduced % 3 === 0) {
    raindrops += "Pling";
  }
  if (numberIntroduced % 5 === 0) {
    raindrops += "Plang";
  }
  if (numberIntroduced % 7 === 0) {
    raindrops += "Plong";
  }
  if (raindrops === "") {
    raindrops = String(numberIntroduced);
  }

  return raindrops;
};
