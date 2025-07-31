import Foundation

func splitOnNewlines(_ poem: String) -> [String] {
    return poem.components(separatedBy: "\n")
}

func firstLetter(_ line: String) -> Character {
    return line.first != nil ? line.first! : Character("_")
}

func capitalize(_ phrase: String) -> String {
    return phrase.capitalized
}

func trimSentence(_ line: String) -> String {
    return line.trimmingCharacters(in: .whitespaces)
}

func lastLetter(_ line: String) -> Character {
    return line.last != nil ? line.last! : Character("_")
}

func backDoorPassword(_ phrase: String) -> String {
    return "\(phrase.capitalized), please"
}

func ithLetter(_ line: String, i: Int) -> Character {
    return i < line.count ? line[line.index(line.startIndex, offsetBy: i)] : Character(" ")
}

func secretRoomPassword(_ phrase: String) -> String {
    return phrase.uppercased + "!"
}
