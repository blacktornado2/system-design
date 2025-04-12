
class Dog {

    // Fields (State)
    String breed;
    int age;
    String color;

    // Constructor
    public Dog(String breed, int age, String color) {
        System.out.println("Constructing a Dog...");
        this.breed = breed; // 'this' refers to the current object's field
        this.age = age;
        this.color = color;
    }

    // Methods (Behavior)
    void bark() {
        System.out.println("Woof! Woof!");
    }

    void sleep() {
        System.out.println("Zzzzz...");
    }

    void displayInfo() {
        System.out.println("Breed: " + breed + ", Age: " + age + ", Color: " + color);
    }
}

public class oops {

    public static void main(String[] args) {
        // Creating Objects (Instances) of the Dog class
        Dog myDog1 = new Dog("Labrador", 3, "Golden");
        Dog myDog2 = new Dog("Poodle", 5, "White");

        // Accessing object fields and methods
        System.out.println("Dog 1 Info:");
        myDog1.displayInfo();
        myDog1.bark();

        System.out.println("\nDog 2 Info:");
        myDog2.displayInfo();
        myDog2.sleep();

        // You can access fields directly if they are not private
        // System.out.println(myDog1.breed);
    }
}

// Encapsulation
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

class BankMain {

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

