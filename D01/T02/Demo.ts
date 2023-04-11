interface IAccount {
    dateOfOpening: Date;
    addCustomer(): void;
    removeCustomer(): void;
  }
  
  class Account {
    acc_no: string;
    balance: number;
  
    debitAmount(amount: number): void {
      if (amount > this.balance) {
        throw new Error('Insufficient balance');
      }
      this.balance -= amount;
    }
  
    creditAmount(amount: number): void {
      this.balance += amount;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  
  class SavingAccount extends Account implements IAccount {
    dateOfOpening: Date;
    
    constructor(acc_no: string, balance: number, dateOfOpening: Date) {
      super();
      this.acc_no = acc_no;
      this.balance = balance;
      this.dateOfOpening = dateOfOpening;
    }
    
    addCustomer(): void {
      // Implementation for adding a customer to a saving account
    }
  
    removeCustomer(): void {
      // Implementation for removing a customer from a saving account
    }
  }
  
  class CurrentAccount extends Account implements IAccount {
    dateOfOpening: Date;
  
    constructor(acc_no: string, balance: number, dateOfOpening: Date) {
      super();
      this.acc_no = acc_no;
      this.balance = balance;
      this.dateOfOpening = dateOfOpening;
    }
  
    addCustomer(): void {
      // Implementation for adding a customer to a current account
    }
  
    removeCustomer(): void {
      // Implementation for removing a customer from a current account
    }
  }
  
  const savingAcc = new SavingAccount('SA001', 1000, new Date());
  const currentAcc = new CurrentAccount('CA001', 2000, new Date());
  
  savingAcc.creditAmount(500); // Credit 500 to saving account
  console.log(savingAcc.getBalance()); // Output: 1500
  
  currentAcc.debitAmount(100); // Debit 100 from current account
  console.log(currentAcc.getBalance()); // Output: 1900
  