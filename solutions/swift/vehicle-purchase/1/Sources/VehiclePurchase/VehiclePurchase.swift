func canIBuy(vehicle: String, price: Double, monthlyBudget: Double) -> String {
    let monthlyPayment = price / (12 * 5)
    if monthlyBudget >= monthlyPayment {
        return "Yes! I'm getting a " + vehicle
    } else if monthlyBudget * 1.1 >= monthlyPayment {
        return "I'll have to be frugal if I want a " + vehicle
    } else {
        return "Darn! No " + vehicle + " for me"
    }
}

func licenseType(numberOfWheels wheels: Int) -> String {
  switch wheels {
      case 2:
          return "You will need a motorcycle license for your vehicle"
      case 3:
          return "You will need a motorcycle license for your vehicle"
      case 4:
          return "You will need an automobile license for your vehicle"
      case 6:
          return "You will need an automobile license for your vehicle"
      case 18:
          return "You will need a commercial trucking license for your vehicle"
      default:
          return "We do not issue licenses for those types of vehicles"
  }
}

func registrationFee(msrp: Int, yearsOld: Int) -> Int {
    guard yearsOld < 10 else { return 25 }
    return ((msrp > 25000 ? msrp : 25000) * (100 - (yearsOld * 10))) / 10000
}
