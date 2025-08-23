# 🏗️ Object-Oriented Programming (OOP)

OOP is a way of structuring your code around **objects**, which bundle together data (properties) and the behavior that acts on that data (methods).

---

## 📜 Basic Terminologies

### Class
-   **Class**: The blueprint or template of an object.
-   A class is a combination of **procedures (methods)** + **properties (attributes)**.
-   A class is required to create an object.
-   A single class can be used to create any number of objects.

### Object
-   **Object**: An instance of a class.
-   **Example 📦**:
    -   **Object**: Dog 🐶
        -   **Properties**: `age`, `breed`, `color`
        -   **Behaviors**: `bark()`, `sleep()`, `eat()`
    -   **Object**: Car 🚗
        -   **Properties**: `color`, `type`, `brand`
        -   **Behaviors**: `applyBrakes()`, `drive()`, `increaseSpeed()`
-   **Creating a new object**: `User ankit = new User();`
-   The `new` keyword is used to allocate memory for the object on the **heap**.

---

## 🏛️ The 4 Pillars of OOP

### 1. Encapsulation 💊
-   Encapsulation is the practice of bundling an object's data (properties) and methods together within a single unit (a class).
-   **Analogy**: Think of a car. You don't need to know how the engine's combustion works to drive it. You just use the pedals and steering wheel (the public interface).
-   In TypeScript, we use **access modifiers**:
    -   `public`: Accessible from anywhere.
    -   `private`: Accessible only within the same class.
    -   `protected`: Accessible within the same class and any subclass.

### 2. Abstraction 🎭
-   Abstraction means hiding complex implementation details and showing only the essential features of the object. It's about the **"what"** an object does, not the **"how"** it does it.
-   We achieve this in TypeScript using `abstract` classes and `interfaces`.
    -   **Abstract Class**: A class that cannot be instantiated on its own. It serves as a base blueprint for other classes and can contain both abstract methods (with no implementation) and concrete methods (with implementation).
    -   **Interface**: A contract that defines a set of properties and methods a class *must implement*. It contains no implementation details at all.

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


### 3. Inheritance 🌳
-   Inheritance allows a class (the *child* or *subclass*) to acquire properties and methods from another class (the *parent* or *superclass*).
-   This promotes code reuse. We use the `extends` keyword in TypeScript.

#### 🧩 Composition vs. Inheritance
A key design principle in OOP is to **"Favor composition over inheritance."**

-   **Inheritance** creates an **"is-a"** relationship. (A `Car` **is a** `Vehicle`). This can lead to rigid hierarchies and tight coupling between classes.
-   **Composition** creates a **"has-a"** relationship. (A `Car` **has an** `Engine`). This is more flexible, allowing you to build complex objects by combining smaller, independent, and reusable objects.


### 4. Polymorphism 🦎
-   Polymorphism (from Greek, "many forms") allows us to treat objects of different classes as if they were objects of a common superclass.
-   A single action or method can have different behaviors depending on the object it is acting upon.
-   This makes our code more flexible and scalable.