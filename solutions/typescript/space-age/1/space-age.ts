interface ageFunctionsDictionary {
  [key: string]: (seconds: number) => number;
}

export function age(planet: string, seconds: number): number {
  return agesFn[planet](seconds);
}

const agesFn: ageFunctionsDictionary = {
  "mercury": (seconds: number) => Number((seconds / (31557600 * 0.2408467)).toFixed(2)),
  "venus": (seconds: number) => Number((seconds / (31557600 * 0.61519726)).toFixed(2)),
  "earth": (seconds: number) => Number((seconds / 31557600).toFixed(2)),
  "mars": (seconds: number) => Number((seconds / (31557600 * 1.8808158)).toFixed(2)),
  "jupiter": (seconds: number) => Number((seconds / (31557600 * 11.862615)).toFixed(2)),
  "saturn": (seconds: number) => Number((seconds / (31557600 * 29.447498)).toFixed(2)),
  "uranus": (seconds: number) => Number((seconds / (31557600 * 84.016846)).toFixed(2)),
  "neptune": (seconds: number) => Number((seconds / (31557600 * 164.79132)).toFixed(2)),
}