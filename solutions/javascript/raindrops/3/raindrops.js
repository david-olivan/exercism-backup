//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (numberIntroduced) => {
  const factorArray = [
    {factor: 3, sound: "Pling"},
    {factor: 5, sound: "Plang"},
    {factor: 7, sound: "Plong"}
  ];

  let raindrops = "";
  
  for (let i = 0; i < 3; i++) {
    if (numberIntroduced % factorArray[i].factor === 0) {
      raindrops += factorArray[i].sound;
    }
  }
  
  if (raindrops === "") {
    raindrops = String(numberIntroduced);
  }

  return raindrops;
};
