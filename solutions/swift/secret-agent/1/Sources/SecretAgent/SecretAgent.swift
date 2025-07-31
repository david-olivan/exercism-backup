func protectSecret(_ secret: String, withPassword password: String) -> (String) -> String {
  func checkPass(_ check: String) -> String {
      return check == password ? secret : "Sorry. No hidden secrets here."
  }

  return checkPass
}

func generateCombination(forRoom room: Int, usingFunction f: (Int) -> Int) -> (Int, Int, Int) {
    return (f(room), f(f(room)), f(f(f(room))))
}
