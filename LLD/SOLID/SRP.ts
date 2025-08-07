class User {
    constructor(name: string, email: string) {

    }

    // Bad
    userAuthentication() {

    }
}

class UserAuthentication {
    constructor(user: User) {

    }

    // Good
    authenticate(password: string) {
        // implementation logic
    }
}

// Practice

class BlogPost {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    // Methods related to content management
    createPost() {

    }

    updatePost() {

    }

    deletePost() {

    }

    // Bad
    // displayHTML() {
    //     return `<h1>${this.title}</h1><p>${this.content}</p>`;
    // }
}

class BlogPostDisplay {
    constructor(public blogPost: BlogPost) {

    }

    displayHTML() {
        return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    }
}