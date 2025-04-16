// * Inheritance
//   Concept: 
// - A mechanism where a new class (subclass or derived class) inherits properties (fields) and behaviors (methods) from an existing class (superclass or base class). 
// - This supports code reuse and establishes an "IS-A" relationship (e.g., a Dog IS-A Animal)

//   Keywords:
// - extends: Used by the subclass to inherit from a superclass.
// - super: Used within a subclass to refer to members (methods, fields, constructors) of its direct superclass.
// - super(): Calls the superclass constructor (must be the first statement in the subclass constructor).
// - super.methodName(): Calls a superclass method.
// - super.fieldName: Accesses a superclass field (less common if fields are private)

// final Keyword:
// final class: Cannot be subclassed.
// final method: Cannot be overridden by subclasses.


// Superclass
class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        System.out.println("Constructing an Animal...");
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(this.name + " is eating.");
    }

    public void sleep() {
        System.out.println(this.name + " is sleeping.");
    }

    // This method cannot be overridden
    public final void breathe() { 
         System.out.println(this.name + " is breathing.");
     }
}

// Subclass inheriting from Animal
class Dog extends Animal {
    String breed;

    // Constructor calling superclass constructor
    public Dog(String name, int age, String breed) {
        super(name, age); // Must be the first statement
        System.out.println("Constructing a Dog...");
        this.breed = breed;
    }

    // New method specific to Dog
    public void bark() {
        System.out.println(this.name + " (a " + this.breed + ") says Woof!");
    }

    // Overriding a superclass method (See Polymorphism)
    @Override // Good practice annotation
    public void eat() {
        super.eat(); // Optionally call the superclass version
        System.out.println(this.name + " the Dog eats dog food.");
    }

    // Cannot override breathe() because it's final in Animal
    // @Override
    // public void breathe() { ... } // Compile error!
}

// Another subclass
class Cat extends Animal {
     public Cat(String name, int age) {
         super(name, age);
         System.out.println("Constructing a Cat...");
     }

     public void meow() {
         System.out.println(name + " says Meow!");
     }

     @Override
     public void eat() {
         System.out.println(name + " the Cat eats fish.");
     }
}


class Inheritance {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", 4, "Golden Retriever");
        myDog.eat();    // Calls overridden Dog eat() method
        myDog.sleep();  // Calls inherited Animal sleep() method
        myDog.bark();   // Calls Dog specific bark() method
        myDog.breathe(); // Calls inherited final Animal breathe() method

        System.out.println("---");

        Cat myCat = new Cat("Whiskers", 2);
        myCat.eat();    // Calls overridden Cat eat() method
        myCat.sleep();  // Calls inherited Animal sleep() method
        myCat.meow();   // Calls Cat specific meow() method
    }
}