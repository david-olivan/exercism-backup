/**
* Allows for setting two prime numbers to be used to generate public and private keys
* and calculate the secret key based on those. It follows the Diffie-Hellman key
* exchange.
*/
export class DiffieHellman {
  /**
  * Checks the inputs for out of bounds and primacy and then stores them for later use
  *
  * @param {number} p A prime number.
  * @param {number} g A prime number.
  */
  constructor(p, g) {
    if (p <= 1 || g <= 1) {
      throw new Error("Out of bounds");
    }
    if (!DiffieHellman.checkIfPrime(p) || !DiffieHellman.checkIfPrime(g)) {
      throw new Error("Number is not prime");
    }
    this.p = p;
    this.g = g;
  }
  
  /**
  * Generates a public key based on the prime numbers and the private key. It also
  * checks whether the private key has been appropriately selected.
  *
  * @params {number} privateKey A number representing the chosen private key.
  * @returns {number} A number representing the associated public key.
  */
  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error("Private key is out of bounds");
    }
    return this.g ** privateKey % this.p;
  }
  
  /**
  * Calculates a secret key based on the other person's public key and a private key
  *
  * @params {number} theirPublicKey A number representing the other person's public key.
  * @params {number} myPrivateKey A number representing your private key.
  * @returns {number} The secret key generated using the DiffieHellman encryption.
  */
  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
  
  /**
  * A static method that allows to check if a given number is prime
  *
  * @params {number} number The number to be evaluated.
  * @returns {boolean} Whether the number is prime or not.
  */
  static checkIfPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false
      }
    }
    return true;
  }
}
