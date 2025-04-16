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
}

// Compile time polymorphism
public class OverloadingMain {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum: " + calc.add(5, 10));
        System.out.println("Sum: " + calc.add(5.5, 10.2));
        System.out.println("Sum: " + calc.add(5, 10, 15));
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}