const ROLES = {
    GUEST: 'guest',
    USER: 'user',
    ADMIN: 'admin'
};

class User {
    constructor({ name, id, role = ROLES.USER }) {
        this.name = name;
        this.id = id
        this.role = role;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }

    hasPermission(permission) {
        const permissions = this.getPermissions();
        return permissions.includes(permission);
    }

    hasAccess() {
        return this.role === ROLES.ADMIN;
    }

    getPermissions() {
        switch (this.role) {
            case ROLES.ADMIN:
                return ['read', 'write', 'delete'];
            case ROLES.USER:
                return ['read', 'write'];
            default:
                return ['read'];
        }
    }
}


class GuestUser extends User {
    constructor() {
        super({ name: 'Guest', id: null, role: ROLES.GUEST });
    }

    sayHello() {
        console.log('Welcome, guest!');
    }
}


const users = [
    new User({ name: "Ankit", id: 21, role: ROLES.ADMIN }),
    new User({ name: "Roshan", id: 20, role: ROLES.USER }),
    new User({ name: "Utkarsh", id: 11, role: ROLES.GUEST }),
];

function getUser(id) {
    return users.find(user => user.id === id);
}

function getUserRefined(id) {
    const user = users.find(user => user.id === id);
    if (user) {
        return user;
    }
    return new GuestUser();
}

function printUser(id) {
    const user = getUser(id);

    /*
      - We need to explicitly tell the console.log to print `Guest` if the user does not have a name
      - This is problematic since we need to remember to always put this every time we use the users name
      - It is also bad because if we want to print `Unknown User` instead, we would need to change every place that we put `Guest` which will most likely be all over the application
    */

    let name = 'Guest'
    if (user != null && user.name != null) name = user.name
    console.log('Hello ' + name)

    /*
      - This will throw an error if we don't first check that the user object has this function available and isn't null.
      - This is a lot of extra code to add in every time we want to check user access, and could cause bugs that are easy to miss if we forget to do the null checks.
    */

    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log('You have access!')
    } else {
        console.log('You are not allowed here!')
    }
}

function printUserRefined(id) {
    const user = getUserRefined(id);
    console.log('Hello ' + user.name);

    // All the null checks are handled by the NullUser class
    if (user.hasAccess()) {
        console.log('You have access!');
    } else {
        console.log('You are not allowed here!');
    }
}

printUser(21); // Hello Ankit, You have access!
printUser(11); // Hello Utkarsh, You are not allowed here!
printUser(100); // Hello Guest, You are not allowed here!
printUser(); // Hello Guest, You are not allowed here!

printUserRefined(21); // Hello Ankit, You have access!
printUserRefined(11); // Hello Utkarsh, You are not allowed here!
printUserRefined(100); // Hello Guest, You are not allowed here!
printUserRefined(); // Hello Guest, You are not allowed here!

users[0].hasPermission('delete'); // true
users[1].hasPermission('delete'); // false