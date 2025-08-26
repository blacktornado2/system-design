/**
 * Liskov Substitution Principle (LSP)
 * Minimal definition: Subtypes must be substitutable for their base types without altering the correctness of the program.
 * If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program
 */

// Example violating LSP
class Bird {
    fly(): string {
        return "I can fly";
    }
}

class Ostrich extends Bird {
    fly(): string {
        throw new Error("Ostriches can't fly!");
    }
}

// Example adhering to LSP
interface IFlyable {
    fly(): string;
}

class Sparrow implements IFlyable {
    fly(): string {
        return "Sparrow flying";
    }
}

class Airplane implements IFlyable {
    fly(): string {
        return "Airplane flying";
    }
}

// Usage
function letItFly(flyer: IFlyable) {
    console.log(flyer.fly());
}

letItFly(new Sparrow());  // Sparrow flying
letItFly(new Airplane());  // Airplane flying


// Subclasses should honor the behavior expected from the base class. If not, consider redesigning your class hierarchy.


// Examples-2
abstract class PaymentProcessor {
    abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class DebitCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
}

class PayPalProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number) {
    paymentProcessor.processPayment(amount);
}

// Now, we can process payments using any of the payment methods:

const creditCardProcessor = new CreditCardProcessor();
executePayment(creditCardProcessor, 100);

const debitCardProcessor = new DebitCardProcessor();
executePayment(debitCardProcessor, 200);

const payPalProcessor = new PayPalProcessor();
executePayment(payPalProcessor, 300);

// Later extend the functionality
class BitcoinProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Bitcoin payment of ${amount} BTC`);
    }
}

const bitcoinProcessor = new BitcoinProcessor();
executePayment(bitcoinProcessor, 2); // Process a payment of 2 BTC