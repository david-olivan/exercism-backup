import Foundation

func sliceSize(diameter: Double?, slices: Int?) -> Double? {
    guard let diamt = diameter, diamt >= 0 else { return nil }
    guard let sli = slices, sli >= 1 else { return nil }

    // Area of a circle  pi * r2
    let area = Double.pi * pow(diamt / 2, 2)

    // Divided by slices
    return area / Double(sli)
}

func biggestSlice(
  diameterA: String, slicesA: String,
  diameterB: String, slicesB: String
) -> String {
    let (areaA, areaB) = (sliceSize(diameter: Double(diameterA), slices: Int(slicesA)), sliceSize(diameter: Double(diameterB), slices: Int(slicesB)))
    if areaA != nil && areaB != nil {
        let (a, b) = (areaA!, areaB!)
        guard a != b else { return "Neither slice is bigger" }
        return a > b ? "Slice A is bigger" : "Slice B is bigger"
    } else {
        if areaA == nil && areaB != nil {
            return "Slice B is bigger"
        }
        if areaB == nil && areaA != nil {
            return "Slice A is bigger"
        }
        return "Neither slice is bigger"
    }
}
