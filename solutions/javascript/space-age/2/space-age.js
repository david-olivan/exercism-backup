const YEARS = {
  mercury: 31557600 * 0.2408467,
  venus: 31557600 * 0.61519726,
  earth: 31557600,
  mars: 31557600 * 1.8808158,
  jupiter: 31557600 * 11.862615,
  saturn: 31557600 * 29.447498,
  uranus: 31557600 * 84.016846,
  neptune: 31557600 * 164.79132
};

export const age = (location, ageInSeconds) => {
  return parseFloat((ageInSeconds / YEARS[location]).toFixed(2));
};
