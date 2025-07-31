/**
* This class allows a bank account to be simulated including typical actions
* such as deposit, withdraw or getting the balance
*/
export class BankAccount {
  constructor() {
    this._statusOpen = false;
  }

  open() {
    if (this.statusOpen) {
      throw new ValueError;
    } else {
      this._statusOpen = true;
      this._balance = 0;
    }
  }

  close() {
    if (this.statusOpen) {
      this._statusOpen = false;
    } else {
      throw new ValueError;
    }    
  }

  deposit(amount) {
    if (!isNaN(amount) && this.statusOpen && amount > 0) {
      this._balance += amount;
    } else {
      throw new ValueError;
    }    
  }

  withdraw(amount) {
    if (amount <= this._balance && this.statusOpen && amount > 0) {
      this._balance -= amount;
    } else {
      throw new ValueError;
    }
  }

  get balance() {
    if (this.statusOpen) {
      return this._balance;
    } else {
    throw new ValueError;
    }
  }

  get statusOpen() {
    return this._statusOpen;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
