//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (numberIntroduced) => {
  let factor3 = (numberIntroduced % 3 === 0);
  let factor5 = (numberIntroduced % 5 === 0);
  let factor7 = (numberIntroduced % 7 === 0);

  let raindrops = "";
  if (factor3) {
    raindrops += "Pling";
  }
  if (factor5) {
    raindrops += "Plang";
  }
  if (factor7) {
    raindrops += "Plong";
  }
  if (!factor3 && !factor5 && !factor7) {
    raindrops = String(numberIntroduced);
  }

  return raindrops;
};
