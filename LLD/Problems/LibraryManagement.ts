/*
    Model the core entities like `Book`, `Member`, and `Library`. The system should handle borrowing and returning books.

    Book
     - bookId
     - title
     - author
     - available
     - toggleAvailability() -> boolean


    Member
     - memberId
     - name
     - borrowBook(bookIds) -> boolean
     - returnBook(bookIds) -> boolean
    

     Library
     - id
     - Member[]
     - Book[]
     - addMember() -> boolean
     - addBook() -> boolean
     - isBookAvailable(bookId)
     - whoHasThisBook(bookId) -> memberId
     - findByAuthor() -> bookTitle[]

*/


class Book {
    public bookId: string;
    public title: string;
    public author: string;
    public available: boolean;

    constructor(id: string, title: string, author: string, avalaible: boolean) {
        this.bookId = id;
        this.title = title;
        this.author = this.author;
        this.available = this.available;
    }

    toggleAvailability() {
        this.available = !this.available;
        return true;
    }
}

class Member {
    private memberId: string;
    public name: string;

    constructor(memberId: string, name: string) {
        this.memberId = memberId;
        this.name = name;
    }

    borrowBooks(books: Book[]) {
        // Check how many books are available
        const availableBooks = books.filter((book) => {
            if (book.available) {
                return book.bookId;
            }
        });

        const noOfUnavailableBooks = books.length - availableBooks.length;

        availableBooks.forEach((book) => book.toggleAvailability())
    }

    returnBooks(books: Book[]) {
        books.forEach((book) => book.toggleAvailability());
    }
}

class Library {
    private id: string;
    private books: Book[];
    private members: Member[];

    constructor() { }

    addMember() { }

    addBook() { }

    findByAuthor() { }

    isBookAvailable(bookId) {
        const book = this.getBookById(bookId);
        return book.available;
    }

    getBookById(bookId) {
        // find book from the DB
        // return the book
        return new Book("4143", "The best book", "Ankit", true);
    }

}