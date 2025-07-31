// The array is created only once
const factorArray = [
  {factor: 3, sound: "Pling"},
  {factor: 5, sound: "Plang"},
  {factor: 7, sound: "Plong"}
];

// The function takes a number and returns the sound it makes
export const convert = (numberIntroduced) => {
  let raindrops = "";

  // This for loop uses the array of objects at the top of the file to test for even divisions and assign the corresponding sound
  for (let i = 0; i < 3; i++) {
    if (numberIntroduced % factorArray[i].factor === 0) {
      raindrops += factorArray[i].sound;
    }
  }

  return raindrops === "" ? String(numberIntroduced) : raindrops;
};
