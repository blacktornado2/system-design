// Parent Class (Superclass)
class Animal {
    protected name: string; // protected is accessible to subclasses

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// Child Class (Subclass)
class Dog extends Animal {
    constructor(name: string) {
        super(name); // Calls the constructor of the parent class (Animal)
    }

    // Method specific to Dog
    public bark(): void {
        console.log("Woof! Woof!");
    }

    // Overriding the parent's method
    public move(distanceInMeters: number): void {
        console.log("Running...");
        super.move(distanceInMeters); // Optionally call the parent method
    }
}

// Grandchild Class
class Husky extends Dog {
    constructor(name: string) {
        super(name);
    }

    public doSploot(): void {
        console.log(`${this.name} is doing a sploot!`);
    }
}

const myDog = new Dog("Buddy");
myDog.bark();         // Output: Woof! Woof!
myDog.move(10);       // Output: Running... Buddy moved 10m.

const husky = new Husky("Jacky");
husky.move(5);      // Inherited from Dog and Animal
husky.bark();       // Inherited from Dog
husky.doSploot();   // Specific to Husky