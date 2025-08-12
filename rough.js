function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`
    }
}

let favBook = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
console.log(favBook.info());