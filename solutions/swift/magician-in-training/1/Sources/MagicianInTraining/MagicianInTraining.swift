func getCard(at index: Int, from stack: [Int]) -> Int {
  return stack[index]
}

func setCard(at index: Int, in stack: [Int], to newCard: Int) -> [Int] {
    guard index >= 0 && index < stack.count else { return stack }

    var newStack = stack
    newStack[index] = newCard
    return newStack
}

func insert(_ newCard: Int, atTopOf stack: [Int]) -> [Int] {
  return stack + [newCard]
}

func removeCard(at index: Int, from stack: [Int]) -> [Int] {
    guard index >= 0 && index < stack.count else { return stack }    
    var stackCopy = stack
    stackCopy.remove(at: index)
    return stackCopy
}

func removeTopCard(_ stack: [Int]) -> [Int] {
    guard !stack.isEmpty else { return stack }
    var stackCopy = stack
    stackCopy.removeLast()
    return stackCopy
}

func insert(_ newCard: Int, atBottomOf stack: [Int]) -> [Int] {
    return [newCard] + stack
}

func removeBottomCard(_ stack: [Int]) -> [Int] {
    guard !stack.isEmpty else { return stack }
    var stackCopy = stack
    stackCopy.remove(at: 0)
    return stackCopy
}

func checkSizeOfStack(_ stack: [Int], _ size: Int) -> Bool {
    return stack.count == size
}

func evenCardCount(_ stack: [Int]) -> Int {
    var count = 0
    for card in stack {
        if card % 2 == 0 {
            count += 1
        }
    }
    return count
}
