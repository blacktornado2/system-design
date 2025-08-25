/*

    Design a Coffee Machine: Model a machine that can make different types of coffee (e.g., Espresso, Latte). Consider the ingredients (`CoffeeBean`, `Milk`, `Water`) and the recipes.

   Step 1: Clarify Requirements & Identify Use Cases
     - First, let's define what the coffee machine needs to do.
     - Make different types of coffee: The machine should have predefined recipes for coffees like Espresso and Latte.
     - Manage ingredients: It needs to track the inventory of ingredients like coffee beans, milk, and water.
     - Handle errors: The machine should not make a coffee if it doesn't have enough ingredients.
     - Be extensible: It should be easy to add new coffee recipes in the future.


    Step 2: Identify the Core Classes
     - Based on the requirements, we can identify a few key classes:
     - Ingredient: A simple class to represent an ingredient with a name and a unit (e.g., grams, ml).
     - Coffee: This class will represent a specific type of coffee. It will have a name and a recipe, which is a list of required ingredients and their quantities.
     - CoffeeMachine: This is the main class. It will manage the inventory of ingredients and have the logic to brew a coffee based on a recipe.

    Ingredient Class:
        Properties:
            name: The name of the ingredient (e.g., "Coffee Beans").
            unit: The measurement unit (e.g., "grams").
    Coffee Class:
        Properties:
        name: The name of the coffee (e.g., "Latte").
        recipe: A map or dictionary where the key is an Ingredient and the value is the required quantity.
    CoffeeMachine Class:
        Properties:
            inventory: A map to store the current stock of each Ingredient.
        Behaviors:
            constructor(): To initialize the machine with a starting inventory.
            addIngredient(ingredient, quantity): To add more stock of an ingredient.
            brew(coffee): The main method. It will check if there are enough ingredients in the inventory to make the requested coffee. If yes, it will deduct the ingredients from the inventory and "brew" the coffee. If not, it will throw an error.

*/


class Ingredient {
    public readonly name: string;
    public readonly unit: string;

    constructor(name: string, unit: string) {
        this.name = name;
        this.unit = unit;
    }
}

class Coffee {
    public readonly name: string;
    // The recipe is a map where the key is the ingredient name and the value is the required quantity.
    public readonly recipe: Map<string, number>;

    constructor(name: string, recipe: Map<string, number>) {
        this.name = name;
        this.recipe = recipe;
    }
}

class CoffeeMachine {
    // The inventory stores the current quantity of each ingredient.
    private inventory: Map<string, number>;

    constructor() {
        this.inventory = new Map();
    }

    public addIngredient(ingredient: Ingredient, quantity: number): void {
        const currentQuantity = this.inventory.get(ingredient.name) || 0;
        this.inventory.set(ingredient.name, currentQuantity + quantity);
        console.log(`Added ${quantity} ${ingredient.unit} of ${ingredient.name}.`);
    }

    public brew(coffee: Coffee): void {
        console.log(`\nAttempting to brew a ${coffee.name}...`);

        // Step 1: Check if there are enough ingredients.
        for (const [ingredientName, requiredQuantity] of coffee.recipe.entries()) {
            const availableQuantity = this.inventory.get(ingredientName) || 0;
            if (availableQuantity < requiredQuantity) {
                console.error(`Error: Not enough ${ingredientName} to make a ${coffee.name}.`);
                return; // Stop the process
            }
        }

        // Step 2: If we have enough, deduct the ingredients from the inventory.
        for (const [ingredientName, requiredQuantity] of coffee.recipe.entries()) {
            const availableQuantity = this.inventory.get(ingredientName)!; // We know it's not null from the check above
            this.inventory.set(ingredientName, availableQuantity - requiredQuantity);
        }

        console.log(`Successfully brewed a ${coffee.name}! ☕`);
    }

    public displayInventory(): void {
        console.log('\n--- Current Inventory ---');
        if (this.inventory.size === 0) {
            console.log('Inventory is empty.');
            return;
        }
        for (const [ingredientName, quantity] of this.inventory.entries()) {
            console.log(`${ingredientName}: ${quantity}`);
        }
        console.log('-------------------------');
    }
}

// 1. Define our ingredients
const coffeeBeans = new Ingredient('Coffee Beans', 'grams');
const water = new Ingredient('Water', 'ml');
const milk = new Ingredient('Milk', 'ml');

// 2. Define our coffee recipes
const espressoRecipe = new Map<string, number>([
    [coffeeBeans.name, 10],
    [water.name, 60],
]);
const espresso = new Coffee('Espresso', espressoRecipe);

const latteRecipe = new Map<string, number>([
    [coffeeBeans.name, 10],
    [water.name, 60],
    [milk.name, 120],
]);
const latte = new Coffee('Latte', latteRecipe);

// 3. Create and stock our coffee machine
const myCoffeeMachine = new CoffeeMachine();
myCoffeeMachine.addIngredient(coffeeBeans, 100);
myCoffeeMachine.addIngredient(water, 500);
myCoffeeMachine.addIngredient(milk, 300);

myCoffeeMachine.displayInventory();

// 4. Brew some coffee!
myCoffeeMachine.brew(espresso);
myCoffeeMachine.displayInventory();

myCoffeeMachine.brew(latte);
myCoffeeMachine.displayInventory();

// Attempt to brew a coffee we don't have enough ingredients for
myCoffeeMachine.brew(latte);
myCoffeeMachine.displayInventory();