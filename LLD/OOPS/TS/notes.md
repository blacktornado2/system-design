# 🏗️ Object-Oriented Programming (OOP)

OOP is a way of structuring your code around **objects**, which bundle together data (properties) and the behavior that acts on that data (methods).

---

## 📜 Basic Terminologies

### Class
-   **Class**: The blueprint or template of an object.
-   A class is a combination of **procedures (methods)** + **properties (attributes)**.
-   A class is required to create an object.
-   A single class can be used to create any number of objects.

### Object
-   **Object**: An instance of a class.
-   **Example 📦**:
    -   **Object**: Dog 🐶<br/>
        -   **Properties**: `age`, `breed`, `color`<br/>
        -   **Behaviors**: `bark()`, `sleep()`, `eat()`<br/>
    -   **Object**: Car 🚗<br/>
        -   **Properties**: `color`, `type`, `brand`<br/>
        -   **Behaviors**: `applyBrakes()`, `drive()`, `increaseSpeed()`<br/>
-   **Creating a new object**: `User ankit = new User();`<br/>
-   The `new` keyword is used to allocate memory for the object on the **heap**.

---

## 🏛️ The 4 Pillars of OOP

### 1. Encapsulation 💊
-   Encapsulation is the practice of bundling an object's data (properties) and methods together within a single unit (a class).
-   **Analogy**: Think of a car. You don't need to know how the engine's combustion works to drive it. You just use the pedals and steering wheel (the public interface).
-   In TypeScript, we use **access modifiers**:<br/>
    -   `public`: Accessible from anywhere.<br/>
    -   `private`: Accessible only within the same class.<br/>
    -   `protected`: Accessible within the same class and any subclass.<br/>

Code Example:
```typescript
class BankAccount {
    private balance: number;

    constructor(initialAmount: number) {
        this.balance = initialAmount;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // Output: 150
// console.log(myAccount.balance); // Error: 'balance' is private
```

### 2. Abstraction 🎭
-   Abstraction means hiding complex implementation details and showing only the essential features of the object. It's about the **"what"** an object does, not the **"how"** it does it.<br/>
-   We achieve this in TypeScript using `abstract` classes and `interfaces`.<br/>
    -   **Abstract Class**: A class that cannot be instantiated on its own. It serves as a base blueprint for other classes and can contain both abstract methods (with no implementation) and concrete methods (with implementation).<br/>
    -   **Interface**: A contract that defines a set of properties and methods a class *must implement*. It contains no implementation details at all.<br/>

Code Example:
```typescript
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}
```
#### ⚖️ Interface vs. Abstract Class
This table highlights the key differences between interfaces and abstract classes in TypeScript.

| Feature | Interface | Abstract Class |
| :--- | :--- | :--- |
| **Instantiation** | Cannot be instantiated. | Cannot be instantiated. |
| **Implementation** | Contains no implementation details (no method bodies). | Can contain both abstract methods (no body) and concrete methods (with body). |
| **Multiple Inheritance**| A class can `implement` multiple interfaces. | A class can only `extend` one abstract class. |
| **Constructor** | Cannot have a constructor. | Can have a constructor. |
| **Properties** | Can define the shape of properties. | Can define properties and also implement them. |
| **When to Use** | To define a contract for a class (what it *can do*). | To share common code and a base structure among related classes (what they *are*). |

#### When to Use an Interface (Example) 📝
Use an **`interface`** when you want to define a "contract" for what a class can do, especially when the classes are unrelated. Think of it as defining a specific capability or role that different objects can share.

```typescript
// The contract: Anything that is "Loggable" MUST have this method.
interface ILoggable {
  toLogString(): string;
}

// A class for user actions.
class UserAction implements ILoggable {
  constructor(public username: string, public action: string) {}

  toLogString(): string {
    return `USER: ${this.username}, ACTION: ${this.action}`;
  }
}

// A completely different class for system errors.
class HttpError implements ILoggable {
  constructor(public statusCode: number, public message: string) {}

  toLogString(): string {
    return `ERROR: Status ${this.statusCode} - ${this.message}`;
  }
}

// A logging function that only cares that the object is "Loggable".
function logItem(item: ILoggable): void {
  console.log(item.toLogString());
}

const userLogin = new UserAction("ankit", "login");
const serverError = new HttpError(500, "Internal Server Error");

logItem(userLogin);
logItem(serverError);
```

#### When to Use an Abstract Class (Example) 👨‍💼
Use an **`abstract class`** when you have a group of closely related classes that share common functionality (an "is-a" relationship). The abstract class provides a base with shared code, while forcing subclasses to implement the unique parts.

```typescript
// The base blueprint: Defines what ALL employees are and have.
abstract class Employee {
  constructor(public id: number, public name: string) {}

  // A concrete method shared by all subclasses.
  getProfile(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }

  // An abstract method that subclasses MUST implement.
  abstract calculateMonthlyPay(): number;
}

class FullTimeEmployee extends Employee {
  constructor(id: number, name: string, private annualSalary: number) {
    super(id, name); // Call the parent constructor
  }

  // Required implementation of the abstract method.
  calculateMonthlyPay(): number {
    return this.annualSalary / 12;
  }
}

class Contractor extends Employee {
  constructor(id: number, name: string, private hourlyRate: number, private hoursWorked: number) {
    super(id, name);
  }

  // Required implementation with different logic.
  calculateMonthlyPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const ankit = new FullTimeEmployee(1, "Ankit", 120000);
const jane = new Contractor(2, "Jane", 50, 160);

console.log(ankit.getProfile()); // Shared method
console.log(`Ankit's Pay: $${ankit.calculateMonthlyPay()}`);

console.log(jane.getProfile()); // Shared method
console.log(`Jane's Pay: $${jane.calculateMonthlyPay()}`);
```

### 3. Inheritance 🌳
-   Inheritance allows a class (the *child* or *subclass*) to acquire properties and methods from another class (the *parent* or *superclass*).
-   This promotes code reuse. We use the `extends` keyword in TypeScript.

Code Example:
```typescript
class Animal {
    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    // Overrides the parent method
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
```

#### 🧩 Composition vs. Inheritance
A key design principle in OOP is to **"Favor composition over inheritance."**

-   **Inheritance** creates an **"is-a"** relationship. (A `Car` **is a** `Vehicle`). This can lead to rigid hierarchies and tight coupling between classes.
-   **Composition** creates a **"has-a"** relationship. (A `Car` **has an** `Engine`). This is more flexible, allowing you to build complex objects by combining smaller, independent, and reusable objects.


### 4. Polymorphism 🦎
-   Polymorphism (from Greek, "many forms") allows us to treat objects of different classes as if they were objects of a common superclass.
-   A single action or method can have different behaviors depending on the object it is acting upon.
-   This makes our code more flexible and scalable.

Code Example:
```typescript
// Using the classes from the Inheritance example
function playSound(animal: Animal) {
    animal.makeSound();
}

const genericAnimal = new Animal();
const myDog = new Dog();

playSound(genericAnimal); // Output: Some generic animal sound
playSound(myDog);         // Output: Woof! Woof!
```

---

## ⚡ Static Members (`static`)

Beyond the properties and methods that belong to an *instance* of a class, OOP allows for **static** members that belong to the **class itself**.

-   **Concept**: A static property or method is shared among all instances of a class. You don't need to create an object with `new` to access it; you call it directly on the class. We cannot access static atttribute/method with its object, but only by its class<br/>
-   **Use Cases**:<br/>
    -   **Utility Functions**: Methods that perform an operation but don't need the internal state of an object (e.g., a `Calculator.add()` method).<br/>
    -   **Constants**: Properties that hold a constant value shared across the application (e.g., `Math.PI`).<br/>
    -   **Counters**: A shared counter to track how many objects of a class have been created.<br/>

Code Example:
```typescript
class MathHelper {
    static readonly PI: number = 3.14159;
    
    static calculateCircumference(radius: number): number {
        // You access static properties using the class name
        return 2 * MathHelper.PI * radius;
    }
}

// No instance needed!
console.log(MathHelper.PI); // Output: 3.14159
console.log(MathHelper.calculateCircumference(10)); // Output: 62.8318
```

---

## 🏷️ Naming Conventions (Quick Summary)

| Element | Convention | Example |
| :--- | :--- | :--- |
| **Class** | **PascalCase** | `class BankAccount { ... }` |
| **Interface** | **PascalCase** | `interface Loggable { ... }` |
| **Abstract Class** | **PascalCase** | `abstract class BaseService { ... }` |
| **Property** | **camelCase** | `public userName: string;` |
| **Method** | **camelCase** | `getUserName() { ... }` |
| **Private Property** | **camelCase** (with `_` prefix) | `private _balance: number;` |

---

# 🎨 Key Class Relationships

This document outlines the most common relationships between classes in Object-Oriented Design (OOD). Understanding these relationships is crucial for building well-structured, maintainable, and scalable software.

---

## 1. Inheritance (Generalization) 👑

* **Relationship:** "is-a"
* **Analogy 🚗:** A `Car` **is-a** `Vehicle`.

> **Definition:** A subclass (child) inherits the properties and methods of a superclass (parent). It's the strongest relationship, creating a tight coupling between classes. The child class can extend and specialize the parent's functionality.

### TypeScript Example:

```typescript
// Parent Class (Superclass)
class Vehicle {
    constructor(public brand: string) {}

    drive() {
        console.log("The vehicle is moving.");
    }
}

// Child Class (Subclass)
class Car extends Vehicle {
    constructor(brand: string, public model: string) {
        super(brand); // Call the parent constructor
    }

    honk() {
        console.log("Beep beep!");
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.drive(); // Inherited from Vehicle
myCar.honk();  // Specific to Car
```

---

## 2. Composition 🧩

* **Relationship:** Strong "part-of"
* **Analogy 🏠:** A `House` is composed of `Room`s.

> **Definition:** An object is composed of one or more other objects. The "part" objects cannot exist without the "whole" object. The lifecycle of the parts is managed by the whole. If the whole is destroyed, its parts are destroyed too.

### TypeScript Example:

```typescript
class Engine {
    start() {
        console.log("Engine started.");
    }
}

// The Car class creates and owns its Engine instance.
class Car {
    private engine: Engine;

    constructor() {
        this.engine = new Engine(); // Engine is created and managed by Car
    }

    startCar() {
        this.engine.start();
        console.log("Car is ready to go.");
    }
}

const myCar = new Car();
// You can't access the engine from outside; its lifecycle is tied to the car.
myCar.startCar();
```

---

## 3. Aggregation 🔷

* **Relationship:** Weak "has-a"
* **Analogy 🏫:** A `Department` **has-a** collection of `Professor`s.

> **Definition:** A specific type of association where an object contains other objects, but the contained objects can exist independently. The lifecycle of the "part" is not tied to the "whole".

### TypeScript Example:

```typescript
class Professor {
    constructor(public name: string) {}
}

// The Department class holds references to Professor objects that are created outside.
class Department {
    public professors: Professor[];

    constructor(public name: string, professors: Professor[]) {
        this.professors = professors; // Professors are passed in, not created by Department
    }
}

const profAdams = new Professor("Dr. Adams");
const profBrown = new Professor("Dr. Brown");

// Professors exist independently.
const csDepartment = new Department("Computer Science", [profAdams, profBrown]);
```

---

## 4. Association 🔗

* **Relationship:** "has-a"
* **Analogy 👨‍⚕️️🧑‍💼:** A `Doctor` **has-a** `Patient`.

> **Definition:** A structural link between two independent objects. Each object has its own lifecycle. This is a more general "has-a" relationship than aggregation.

### TypeScript Example:

```typescript
class Patient {
    constructor(public name: string) {}
}

// A Doctor can be associated with multiple patients.
class Doctor {
    public patients: Patient[] = [];

    constructor(public name: string) {}

    addPatient(patient: Patient) {
        this.patients.push(patient);
    }
}

const drSmith = new Doctor("Dr. Smith");
const patientJohn = new Patient("John Doe");

// We associate the patient with the doctor.
drSmith.addPatient(patientJohn);
```

---

## 5. Dependency 💧

* **Relationship:** "uses-a"
* **Analogy 🛒:** A `ShoppingCart` **uses-a** `PaymentProcessor`.

> **Definition:** The weakest relationship. A class depends on another if it uses it temporarily, typically as a method parameter, return type, or local variable. There is no structural link between the classes.

### TypeScript Example:

```typescript
class Logger {
    log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

// The TaskManager uses a Logger to perform an action, but doesn't store it.
class TaskManager {
    performTask(logger: Logger) { // Dependency is passed as a parameter
        logger.log("Starting task...");
        // ... task logic ...
        logger.log("Task finished.");
    }
}

const myLogger = new Logger();
const taskManager = new TaskManager();

// The manager depends on the logger to complete its method.
taskManager.performTask(myLogger);
```

---

## 6. Realization (Implementation) 📜

* **Relationship:** "can-do-this"
* **Analogy 🔌:** A `UK_PowerSocket` class *implements* the `PowerOutlet` interface.

> **Definition:** A class implements an `interface`, guaranteeing that it will provide the functionality (methods and properties) defined by that interface. It's a contract that the class agrees to fulfill.

### TypeScript Example:

```typescript
// The interface defines a "contract" for what a class can do.
interface Printable {
    print(): string;
}

// This class "realizes" or "implements" the Printable interface.
class Report implements Printable {
    constructor(public content: string) {}

    print(): string {
        return `Report Content: ${this.content}`;
    }
}

class Invoice implements Printable {
    constructor(public amount: number) {}

    print(): string {
        return `Invoice Amount: $${this.amount}`;
    }
}
