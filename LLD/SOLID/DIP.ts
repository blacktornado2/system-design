// High-level modules should not depend on low-level modules. 
// Both should depend on abstractions. 
// Abstractions should not depend on details. 
// Details should depend on abstractions


// Without DIP
class MySQLDatabase {
    save(data: string): void {
        // logic to save data to a MySQL database
    }
}

class HighLevelModule {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase();
    }

    execute(data: string): void {
        // high-level logic
        this.database.save(data);
    }
}

// With DIP
interface IDatabase {
    save(data: string): void;
}

class MySQLDB implements IDatabase {
    save(data: string): void {
        // logic to save data to a MySQL database
    }
}

class MongoDB implements IDatabase {
    save(data: string): void {
        // logic to save data to a MongoDB database
    }
}

class HighLevelModul {
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    execute(data: string): void {
        // high-level logic
        this.database.save(data);
    }
}

// Instantiate the HighLevelModule with a MySQL database.
let mySQLDatabase: IDatabase = new MySQLDatabase();
let highLevelModule1: HighLevelModul = new HighLevelModul(mySQLDatabase);

// Now use the module to execute some high level function.
highLevelModule1.execute("Some Data for MySQL");

// Instantiate the HighLevelModule with a MongoDB database.
let mongoDBDatabase: IDatabase = new MongoDB();
let highLevelModule2: HighLevelModul = new HighLevelModul(mongoDBDatabase);

// Now use the module to execute some high level function.
highLevelModule2.execute("Some Data for MongoDB");