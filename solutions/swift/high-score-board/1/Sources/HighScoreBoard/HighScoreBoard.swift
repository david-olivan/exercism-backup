func newScoreBoard() -> [String: Int] {
  return [String: Int]()
}

func addPlayer(_ scores: inout [String: Int], _ name: String, _ score: Int = 0) {
  scores[name] = score
}

func removePlayer(_ scores: inout [String: Int], _ name: String) {
  scores.removeValue(forKey: name)
}

func resetScore(_ scores: inout [String: Int], _ name: String) {
    if scores.contains { $0.key == name } {
        scores[name] = 0
    }
}

func updateScore(_ scores: inout [String: Int], _ name: String, _ delta: Int) {
    scores[name] = scores[name]! + delta
}

func orderByPlayers(_ scores: [String: Int]) -> [(String, Int)] {
  return scores.sorted(by: <)
}

func orderByScores(_ scores: [String: Int]) -> [(String, Int)] {
  return scores.sorted(by: { $0.value > $1.value })
}
