

// Then, add a separate function to the script
//  (not inside the constructor) that can take
//   some arguments, create a book from those arguments
//  and store the new book object into an array

const crypto = require('node:crypto');
const myLibrary = [];

function Book(title, author, numOfPages, read){

  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  
 this.ID = crypto.randomUUID();


}

Book.prototype.getReadStatus = function(){
  if(this.read === true){
  return "has been read"
  } else {
  return "has not been read yet"
  }
}


function addBookToLibrary(title, author, numOfPages, read){
  myLibrary.push(new Book(title, author, numOfPages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(myLibrary);