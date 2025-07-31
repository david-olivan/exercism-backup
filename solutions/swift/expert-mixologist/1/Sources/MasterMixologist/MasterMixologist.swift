func timeToPrepare(drinks: [String]) -> Double {
    var time = 0.0
    
    for drink in drinks {
        switch drink {
            case "beer",
                 "soda",
                 "water":
                time += 0.5
            case "shot":
                time += 1.0
            case "mixed drink":
                time += 1.5
            case "fancy drink":
                time += 2.5
            case "frozen drink":
                time += 3.0
            default:
                continue
        }
    }

    return time
}

func makeWedges(needed: Int, limes: [String]) -> Int {
    guard needed != 0 else { return 0 }
    guard !limes.isEmpty else { return 0 }
    
    var (currentLimes, count) = (0, 0)
    var localLimes = limes
    let numberOfWedges = ["small": 6, "medium": 8, "large": 10]
    
    while currentLimes < needed {
        if localLimes.isEmpty { return count }
        currentLimes += numberOfWedges[localLimes.removeFirst()]!
        count += 1
    }

    return count
}

func finishShift(minutesLeft: Int, remainingOrders: [[String]]) -> [[String]] {
    var (ml, rm) = (Double(minutesLeft), remainingOrders)
    
    while !rm.isEmpty {
        guard ml > 0 else { break }
        ml -= timeToPrepare(drinks: rm.removeFirst())
    }

    return rm
}

func orderTracker(orders: [(drink: String, time: String)]) -> (
  beer: (first: String, last: String, total: Int)?, soda: (first: String, last: String, total: Int)?
) {
    var beer: (first: String, last: String, total: Int)? = nil
    var soda: (first: String, last: String, total: Int)? = nil

    for order in orders {
        if order.drink == "beer" {
            if beer == nil {
                beer = (first: order.time, last: order.time, total: 1)
            } else {
                beer = (first: beer!.first, last: order.time, total: beer!.total + 1)
            }
        }
        if order.drink == "soda" {
            if soda == nil {
                soda = (first: order.time, last: order.time, total: 1)
            } else {
                soda = (first: soda!.first, last: order.time, total: soda!.total + 1)
            }
        }
    }

    return (beer: beer, soda: soda)
}
