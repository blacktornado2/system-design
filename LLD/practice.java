// 1. Create a Car Class: Define a Car class with fields for make, model, and year. 
// Include a constructor to initialize these fields and a method displayInfo() to print the car's details.
// Create two different Car objects and display their information.
class Car {

    private int make;
    private String model;
    private int year;

    Car(int make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    void displayInfo() {
        System.out.println(this.make);
        System.out.println(this.model);
        System.out.println(this.year);
    }
}

class CarMain {

    public static void main(String[] args) {
        Car AnkitsCar = new Car(23, "Honda", 2020);
        Car AnkitjisCar = new Car(24, "Ford", 2024);

        AnkitsCar.displayInfo();
        AnkitjisCar.displayInfo();
    }
}

// 2. Encapsulate Student Data: Create a Student class with private fields for studentId (String) and grade (int).
// Provide public getter methods for both fields and a public setter method only for grade. 
// Add validation in the setter to ensure the grade is between 0 and 100.
class Student {

    private String studentId;
    private int grade;

    public String getStudentId() {
        return this.studentId;
    }

    public int getGrade() {
        return this.grade;
    }

    public void setGrade(int grade) {
        if (grade <= 100 && grade >= 0) {
            this.grade = grade;
        }
    }
}

// 3. Simple Inheritance: Create a Vehicle class with a startEngine() method that prints "Engine started." 
// Create a Motorcycle class that extends Vehicle. Create a Motorcycle object and call its startEngine() method.
class Vehicle {

    public void startEngine() {
        System.out.println("Engine started");
    }
}

class Motorcycle extends Vehicle {

}

class MotorcycleMain {

    public static void main(String[] args) {
        Motorcycle bike = new Motorcycle();
        bike.startEngine();
    }
}


// 4. Method Overloading: Create a Printer class with two print methods: one that takes a String argument and prints it, and another that takes an int argument and prints it.
// Demonstrate calling both methods.
class Printer {
    Printer(String text) {
        System.err.println(text);
    }

    Printer(int num) {
        System.out.println(num);
    }
}

// 5. Basic Object Interaction: Create a Book class (title, author) and an Author class (name, email).
// Modify the Book class to hold an Author object instead of just the author's name. 
// Create instances and link them.

class Author {
    String name;
    String email;

    Author(String name, String email) {
        this.name = name;
        this.email = email;
    }
}

class Book {
    String title;
    Author author;

    Book(String title, Author author) {
        this.title = title;
        this.author = author;
    }
}

class BookMain {
    public static void main(String[] args) {
        Author Ankit = new Author("Ankit", "ankitb@one.com");
        Book myBook = new Book("My Life", Ankit);
    }
}

// 6. Static Members: Add a static integer field counter to the Car class (from Q1) that increments every time a new Car object is created (hint: use the constructor).
// Add a static method getCarCount() to return the value of counter. 
// Create a few cars and print the total count.