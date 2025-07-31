import Foundation

func cartesianToPolar(_ cart: (x: Double, y: Double)) -> (r: Double, phi: Double) {
  return (sqrt(pow(cart.x, 2) + pow(cart.y, 2)), atan2(cart.y, cart.x))
}

func combineRecords(
  production: (toy: String, id: Int, productLead: String),
  gifts: (Int, [String])
) -> (id: Int, toy: String, productLead: String, recipients: [String]) {
  return (production.id, production.toy, production.productLead, gifts.1)
}
