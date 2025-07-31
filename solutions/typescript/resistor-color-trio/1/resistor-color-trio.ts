type Bands = typeof COLORS[number][]


export function decodedResistorValue(bands: Bands): string {
  let [cifra_de_bandas, potencia] = [COLORS.indexOf(bands[0]) * 10 + COLORS.indexOf(bands[1]), COLORS.indexOf(bands[2])]
  if (potencia >= 8) {
    // Estamos hablando de giga
    return cifra_de_bandas * Math.pow(10, potencia - 9) + " gigaohms"
  }
  else if (potencia >= 5) {
    // Estamos hablando de mega
    return cifra_de_bandas * Math.pow(10, potencia - 6) + " megaohms"
  }
  else if (potencia >= 2) {
    // Estamos hablando de kilos
    return cifra_de_bandas * Math.pow(10, potencia - 3) + " kiloohms"
  }
  else {
    // Ohms normals
    return cifra_de_bandas * Math.pow(10, potencia) + " ohms"
  }
}


export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const