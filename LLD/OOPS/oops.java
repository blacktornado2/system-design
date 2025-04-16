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