// Bad Practice: No Encapsulation
class BankAccount_Bad {
    public accountHolder: string;
    public balance: number; // Anyone can access and modify this directly!

    constructor(name: string, initialBalance: number) {
        this.accountHolder = name;
        this.balance = initialBalance;
    }
}

const badAccount = new BankAccount_Bad("John Doe", 1000);
badAccount.balance = -5000; // This should not be possible!
console.log(badAccount.balance); // Output: -5000


// --------------------------------------------------------------------------------------------------------


// Good Practice: With Encapsulation
class BankAccount {
    public readonly accountHolder: string;
    private _balance: number = 0; // Prefixed with _ by convention

    constructor(name: string, initialBalance: number) {
        this.accountHolder = name;
        if (initialBalance > 0) {
            this._balance = initialBalance;
        }
    }

    // A "getter" method to safely read the balance
    public getBalance(): number {
        return this._balance;
    }

    // A method to safely deposit money
    public deposit(amount: number): void {
        if (amount <= 0) {
            console.error("Deposit amount must be positive.");
            return;
        }
        this._balance += amount;
        console.log(`Deposited $${amount}. New balance is $${this._balance}.`);
    }

    // A method to safely withdraw money
    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.error("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this._balance) {
            console.error("Insufficient funds.");
            return;
        }
        this._balance -= amount;
        console.log(`Withdrew $${amount}. New balance is $${this._balance}.`);
    }
}

const goodAccount = new BankAccount("Jane Doe", 1000);
// goodAccount._balance = 5000; // Error: Property '_balance' is private.

goodAccount.deposit(500); // Output: Deposited $500. New balance is $1500.
goodAccount.withdraw(2000); // Output: Insufficient funds.