package Java;
// Concept: Hiding the complex implementation details and showing only the essential features or functionalities to the user.
// It focuses on what an object does rather than how it does it. Abstraction helps manage complexity.

// Achieved in Java using:
// Abstract Classes: Classes declared with the abstract keyword.
// Cannot be instantiated directly.
// Can have both abstract methods (declared without implementation, ending with a semicolon) and concrete methods (with implementation).
// If a class has even one abstract method, the class must be declared abstract.
// Subclasses must either implement (override) all abstract methods of the superclass or be declared abstract themselves.
// Can have constructors, fields (including non-final), and static methods.
// Used when you want to provide a common base class with some default implementation and some methods that must be implemented by subclasses.

// Interfaces: A completely abstract blueprint of a class. Declared using the interface keyword.
// Cannot be instantiated directly.
// Traditionally (before Java 8), could only contain public abstract methods and public static final constants (fields). The modifiers are implicit.
// Java 8 introduced default methods (provide a default implementation that implementing classes can use or override) and static methods (belong to the interface itself).
// A class implements an interface (instead of extends).
// A class can implement multiple interfaces (achieving a form of multiple inheritance).
// Used to define a contract that implementing classes must adhere to. Specifies what a class must do, but not how.

public class Abstraction {
    public static void main(String[] args) {
        // Cannot instantiate Shape directly:
        // Shape s = new Shape("Red"); // Compile error!

        Shape circle = new Circle("Red", 5.0);
        Shape rectangle = new Rectangle("Blue", 4.0, 6.0);

        circle.draw();
        System.out.println("Circle Area: " + circle.calculateArea());

        rectangle.draw();
        System.out.println("Rectangle Area: " + rectangle.calculateArea());
    }
}

// Abstract superclass
abstract class Shape {
    String color;

    // Constructor
    public Shape(String color) {
        this.color = color;
    }

    // Concrete method
    public String getColor() {
        return color;
    }

    // Abstract method - must be implemented by concrete subclasses
    public abstract double calculateArea();
    public abstract void draw();
}

// Concrete subclass
class Circle extends Shape {
    double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    // Implementing the abstract methods
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public void draw() {
         System.out.println("Drawing a " + super.getColor() + " circle with radius " + radius);
    }
}

// Concrete subclass
class Rectangle extends Shape {
    double width;
    double height;

    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Implementing the abstract methods
    @Override
    public double calculateArea() {
        return width * height;
    }

     @Override
    public void draw() {
         System.out.println("Drawing a " + super.getColor() + " rectangle with width " + width + " and height " + height);
    }
}

