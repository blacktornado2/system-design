export abstract class Shape {
    // A concrete method, shared by all subclasses
    public getColor(): string {
        return "red";
    }

    // An abstract method. Subclasses MUST provide an implementation for this.
    public abstract getArea(): number;
}

// const myShape = new Shape(); // Error: Cannot create an instance of an abstract class.

export class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super(); // Must call super() in constructor of derived class
        this.radius = radius;
    }

    // We MUST implement getArea
    public getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

export class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // We MUST implement getArea
    public getArea(): number {
        return this.width * this.height;
    }
}

const circle: Circle = new Circle(10);
const rectangle: Rectangle = new Rectangle(10, 5);

console.log(`Circle Area: ${circle.getArea()}`);       // Output: Circle Area: 314.159...
console.log(`Rectangle Area: ${rectangle.getArea()}`); // Output: Rectangle Area: 50

// TODO: difference between interface and abstract class