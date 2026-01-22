/* 

Write a constructor for making “Book” objects.
Your book objects should have the book’s title, author, the number of pages, 
and whether or not you have read the book.

Put a function into the constructor that can report the book info like so:

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


*/

const { title } = require("process");

function Book(title, author, numOfPages, read){
  
// if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor") };

  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read

  let readStatus;
  if (this.read === true ){
    readStatus = "has been read"
  } else {
    readStatus = " not read yet"
  }

  this.info = `${title} by ${author}, ${numOfPages} pages, ` + readStatus 

  }
  
  
const book = new Book("The Hobbit","J.R.R. Tolkien","295", false)

console.log(book.info)