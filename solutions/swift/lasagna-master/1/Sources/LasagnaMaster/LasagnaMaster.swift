func remainingMinutesInOven(elapsedMinutes: Int, expectedMinutesInOven: Int = 40) -> Int {
    return expectedMinutesInOven - elapsedMinutes
}

func preparationTimeInMinutes(layers: String...) -> Int {
    return 2 * layers.count
}

func quantities(layers: String...) -> (noodles: Int, sauce: Double) {
    var noodles = 0
    var sauce = 0
    for layer in layers {
        if layer == "sauce" {
            sauce += 1
        }
        if layer == "noodles" {
            noodles += 1
        }
    }

    return (noodles: noodles * 3, sauce: Double(sauce) * 0.2)
}

func toOz(_ amount: inout (noodles: Int, sauce: Double)) -> String {
    amount.sauce *= 33.814
    return "amount is now \(amount)"
}

func redWine(layers: String...) -> Bool {
    func countLayers(_ layer: String) -> Int {
        var count = 0
        for ly in layers {
            if ly == layer {
                count += 1
            }
        }
        return count
    }

    if (countLayers("mozzarella") + countLayers("ricotta") + countLayers("béchamel")) > (countLayers("sauce") + countLayers("meat")) {
                                                                                                            return false
    }
    return true
}
