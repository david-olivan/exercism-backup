// The 'expectedMinutesInOven' constant
let expectedMinutesInOven: Int = 40

// The 'remainingMinutesInOven' function
func remainingMinutesInOven(elapsedMinutes: Int) -> Int {
    return expectedMinutesInOven - elapsedMinutes
}

// The 'preparationTimeInMinutes' function
func preparationTimeInMinutes(layers: Int) -> Int {
    return 2 * layers
}

// The 'totalTimeInMinutes' function
func totalTimeInMinutes(layers: Int, elapsedMinutes: Int) -> Int {
    return preparationTimeInMinutes(layers: layers) + elapsedMinutes
}
