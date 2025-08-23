// A class should have only one reason to change
// If a class has more than one responsibility, it becomes coupled, and a change to one responsibility can affect the others.
// This coupling can make the code more difficult to understand, modify, and maintain.
// By splitting large classes into smaller ones each with a single responsibility

// User class can handle both user management and user authentication, but shouldn't be designed to
// Break this work into a separate class -> UserAuthentication
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

class UserAuthentication {
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    authenticate(password: string): boolean {
        // Implement authentication logic here
        return true;
    }
}


class BlogPost {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    // Methods related to content management
    createPost() {
        // Implementation here
    }

    updatePost() {
        // Implementation here
    }

    deletePost() {
        // Implementation here
    }

    // VIOLATION: This is a presentation responsibility
    displayHTML() {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }

    // VIOLATION: This is a database/persistence responsibility
    saveToDatabase() {
        // Code to connect to a database and save the post
    }
}

class BlogPostDisplay {
    blogPost: BlogPost;

    constructor(blogPost: BlogPost) {
        this.blogPost = blogPost;
    }

    displayHTML() {
        return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    }
}

// createPost, deletePost, updatePost are single responsibily -> managing blog post