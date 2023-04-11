var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.debitAmount = function (amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient balance');
        }
        this.balance -= amount;
    };
    Account.prototype.creditAmount = function (amount) {
        this.balance += amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(acc_no, balance, dateOfOpening) {
        var _this = _super.call(this) || this;
        _this.acc_no = acc_no;
        _this.balance = balance;
        _this.dateOfOpening = dateOfOpening;
        return _this;
    }
    SavingAccount.prototype.addCustomer = function () {
        // Implementation for adding a customer to a saving account
    };
    SavingAccount.prototype.removeCustomer = function () {
        // Implementation for removing a customer from a saving account
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(acc_no, balance, dateOfOpening) {
        var _this = _super.call(this) || this;
        _this.acc_no = acc_no;
        _this.balance = balance;
        _this.dateOfOpening = dateOfOpening;
        return _this;
    }
    CurrentAccount.prototype.addCustomer = function () {
        // Implementation for adding a customer to a current account
    };
    CurrentAccount.prototype.removeCustomer = function () {
        // Implementation for removing a customer from a current account
    };
    return CurrentAccount;
}(Account));
var savingAcc = new SavingAccount('SA001', 1000, new Date());
var currentAcc = new CurrentAccount('CA001', 2000, new Date());
savingAcc.creditAmount(500); // Credit 500 to saving account
console.log(savingAcc.getBalance()); // Output: 1500
currentAcc.debitAmount(100); // Debit 100 from current account
console.log(currentAcc.getBalance()); // Output: 1900
