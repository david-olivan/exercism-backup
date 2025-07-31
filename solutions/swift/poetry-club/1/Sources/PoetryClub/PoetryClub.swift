import Foundation

func splitOnNewlines(_ poem: String) -> [String] {
  return poem.components(separatedBy: "\n")
}

func firstLetter(_ line: String) -> Character {
    guard line.first != nil else { return Character("_") }
    return line.first!
}

func capitalize(_ phrase: String) -> String {
  return phrase.capitalized
}

func trimSentence(_ line: String) -> String {
  return line.trimmingCharacters(in: .whitespaces)
}

func lastLetter(_ line: String) -> Character {
    guard line.last != nil else { return Character("_") }
    return line.last!
}

func backDoorPassword(_ phrase: String) -> String {
    return "\(phrase.capitalized), please"
}

func ithLetter(_ line: String, i: Int) -> Character {
    guard i < line.count else { return Character(" ") }
    return line[line.index(line.startIndex, offsetBy: i)]
}

func secretRoomPassword(_ phrase: String) -> String {
    return phrase.uppercased + "!"
}
