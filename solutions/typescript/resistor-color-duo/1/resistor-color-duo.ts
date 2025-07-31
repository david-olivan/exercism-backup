type Bands = typeof COLORS[number][]

export function decodedValue(bands: Bands): number {
  return COLORS.indexOf(bands[0]) * 10 + COLORS.indexOf(bands[1])
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const