// Objects
// Activity 1: Object Creation and Acess
// Task 1: Create an object representing a book with properties like title, author, and year and  year and log the object to the console.

const book = {
    title: 'Ignited Minds',
    author: 'Dr. A.P.J. Abdul Kalam',
    year: 2002,
    getBookInfo: function () {
        return `${this.title} by ${this.author}`;
    },
    updateYear: (obj, newYear) =>{
        obj.year = newYear;
    }
};

console.log(book);

// Task 2: Access and log the title and author propeties of the book object.
console.log('Title:', book.title);
console.log('Author:', book.author);

//Activity2 : Object Methods 
// Task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
   console.log(book.getBookInfo());

// Task 4: Add a method to the book object that takes a paramaeter(year) and updates the book's year property, then log the updated object.
 book.updateYear(book, 2024);
 console.log(book);

 //Nested Objects 
 //Task 5 : Create a nested object representing a library with properties like name and books(an array of book objects), and log the library objects to the console.
  
 const Library = {
    name : 'City Library',
    books: [
        {
            title: 'Ignited Minds',
            Author: 'Dr. A.P.J Abdul Kalam',
            year  : 2002,
            getbookDetails: function() {
                return`${this.title} by ${this.Author}`;
            }
        },
        {
            title: 'the white Tiger',
            Author: 'Aravind Adiga',
            year :2008,
            getbookDetails: function(){
                return`${this.title} by ${this.Author}`;
            }
        },
        {
            title : 'God of small Things',
            Author: 'Arundhati Roy',
            year : 1997,
            getbookDetails: function(){
                return `${this.title} by ${this.Author}`
            }
        }
    ]
 }
 console.log(Library);
 Library.books.forEach(book =>{
    console.log(book.getbookDetails());
 });

 // Task 6 : Acess and log the name of the lobray and the titles and the titles of all the books in the library.

 console.log(`Name of the Library:${Library.name}`);
 Library.books.forEach(function(book){
    console.log(`Book Title :${book.title}`);
 });

 //Activity 5: Object Iteration
 for (let index in Library.books){
    if (Library.books.hasOwnProperty(index)){
        let book = Library.books[index];
        console.log(`Book Title:${book.title}`);
        console.log(`Author:${book.Author}`);
        console.log(`Year: ${book.year}`);
        console.log(`_____`)
    }
 };

 // for of 
 for (let book of Library.books) {
    console.log(`Book Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year: ${book.year}`);
    console.log('---');
}

 
 