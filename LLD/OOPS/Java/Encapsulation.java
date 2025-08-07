package Java;
// * Encapsulation:
//   Concept:
// - Bundling the data (fields/properties) and the methods that operate on that data within a single unit (the class). 
// - It also involves data hiding, restricting direct access to some of an object's components.
// - This is typically achieved using private access modifiers for fields and providing public methods (getters and setters) to access and modify the data in a controlled manner.

class BankAccount {
    // Private field - hidden from outside the class
    private double balance;
    private String accountNumber;

    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        
        // Add validation
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
            System.out.println("Initial balance cannot be negative. Set to 0.");
        }
    }

    // Public Getter method - provides controlled read access
    public double getBalance() {
        return balance;
    }

    // Public Getter for account number
    public String getAccountNumber() {
        return accountNumber;
    }

    // Public method to deposit - controlled modification
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount + ". New Balance: " + balance);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw - controlled modification
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount + ". New Balance: " + balance);
        } else if (amount > balance) {
            System.out.println("Withdrawal failed. Insufficient funds.");
        } else {
            System.out.println("Withdrawal amount must be positive.");
        }
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        BankAccount myAccount = new BankAccount("123456789", 1000.0);

        // Cannot access balance directly:
        // System.out.println(myAccount.balance); // Compile-time error!

        // Use getter to access balance
        System.out.println("Account: " + myAccount.getAccountNumber());
        System.out.println("Current Balance: " + myAccount.getBalance());

        myAccount.deposit(500.0);
        myAccount.withdraw(200.0);
        myAccount.withdraw(1500.0); // Insufficient funds
        myAccount.deposit(-100.0); // Invalid amount

        System.out.println("Final Balance: " + myAccount.getBalance());
    }
}