// Using the Shape, Circle, and Rectangle classes from the Abstraction example...

import { Shape, Circle, Rectangle } from './Abstraction'

const shapes: Shape[] = [];
shapes.push(new Circle(5));
shapes.push(new Rectangle(4, 8));
shapes.push(new Circle(2.5));

// This function works with ANY object that is a "Shape".
// This is polymorphism in action.
function printShapeAreas(allShapes: Shape[]) {
    for (const shape of allShapes) {
        // The correct getArea() is called for each object at runtime.
        // TypeScript knows to call Circle's getArea for circles,
        // and Rectangle's getArea for rectangles.
        console.log(`Area: ${shape.getArea().toFixed(2)}`);
    }
}

printShapeAreas(shapes);
// Output:
// Area: 78.54
// Area: 32.00
// Area: 19.63