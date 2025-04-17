// Concept: "Many forms." Allows objects of different classes to be treated as objects of a common superclass. 
// It enables performing a single action in different ways depending on the object's actual type.

// Types of Polymorphism
// 1. Compile-time Polymorphism (Method Overloading): 
// Defining multiple methods in the same class with the same name but different parameters (different number, type, or order of parameters). 
// The compiler determines which method to call based on the method signature at compile time. Also known as static binding.

// 2. Runtime Polymorphism (Method Overriding): 
// A subclass provides a specific implementation for a method that is already defined in its superclass. 
// The method to be executed is determined at runtime based on the actual object type, not the reference type. 
// Requires inheritance. Also known as dynamic binding or dynamic method dispatch.


public class Polymorphism {
    public static void main(String[] args) {
        // Compile time polymorphism
        Calculator calc = new Calculator();
        System.out.println("Sum: " + calc.add(5, 10));
        System.out.println("Sum: " + calc.add(5.5, 10.2));
        System.out.println("Sum: " + calc.add(5, 10, 15));

        // Runtime polymorphism
        // Reference type is Animal, Object type is Dog
        Animal myAnimal1 = new Dog("Rex", 3, "German Shepherd");

        // Reference type is Animal, Object type is Cat
        Animal myAnimal2 = new Cat("Snowy", 1);

        // Polymorphic behavior: The correct eat() method is called at runtime
        // based on the actual object type (Dog or Cat).
        myAnimal1.eat(); // Calls Dog's overridden eat() method
        myAnimal2.eat(); // Calls Cat's overridden eat() method

        // We can have an array or list of Animals, holding different subtypes
        Animal[] zoo = new Animal[3];
        zoo[0] = new Dog("Buddy", 4, "Labrador");
        zoo[1] = new Cat("Misty", 2);
        zoo[2] = new Dog("Max", 5, "Poodle");

        System.out.println("\n--- Feeding time at the zoo ---");
        for (Animal animal : zoo) {
             feedAnimal(animal); // Pass different animal types to the same method
        }
    }
}

class Calculator {
    // Overloaded add methods
    public int add(int a, int b) {
        System.out.println("Adding two ints");
        return a + b;
    }

    public double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }

    public int add(int a, int b, int c) {
        System.out.println("Adding three ints");
        return a + b + c;
    }
};

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

    public final void breathe() { 
         System.out.println(this.name + " is breathing.");
     }
}

class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        System.out.println("Constructing a Dog...");
        this.breed = breed;
    }

    public void bark() {
        System.out.println(this.name + " (a " + this.breed + ") says Woof!");
    }

    @Override
    public void eat() {
        super.eat();
        System.out.println(this.name + " the Dog eats dog food.");
    }
}

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