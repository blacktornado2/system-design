// No client should be forced to depend on interfaces they do not use.

// don't add additional functionality to an existing interface by adding new methods. Instead, create a new interface


// Example-1

interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        // actual implementation
    }
}

class MultiFunctionMachine implements Printer, Scanner, FaxMachine {
    print(document: Document): void {
        // actual implementation
    }

    scan(document: Document): void {
        // actual implementation
    }

    fax(document: Document): void {
        // actual implementation
    }
}


// Example-2


interface Post {
    title: string;
    content: string;
}

interface Comment {
    content: string;
}

interface PostCreator {
    createPost(post: Post): void;
}

interface CommentCreator {
    commentOnPost(comment: Comment): void;
}

interface PostSharer {
    sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
    createPost(post: Post): void {
        // Actual implementation
    }

    commentOnPost(comment: Comment): void {
        // Actual implementation
    }

    sharePost(post: Post): void {
        // Actual implementation
    }
}

class RegularUser implements CommentCreator, PostSharer {
    commentOnPost(comment: Comment): void {
        // Actual implementation
    }

    sharePost(post: Post): void {
        // Actual implementation
    }
}

class ReadOnlyUser {
    // Doesn't implement any of the interfaces because they can't perform any of these actions.
}