
// const crypto = require('node:crypto');
const myLibrary = [];

function Book(title, author, numOfPages, read){

  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.ID = self.crypto.randomUUID();
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
addBookToLibrary("Book 1", "Author 1", 200, false);
addBookToLibrary("Book 2", "Author 2", 400, true);
addBookToLibrary("Book 3", "Author 3", 900, false);

// Write a function that loops through the array and displays
//  each book on the page. You can display them in some sort of 
//  table, or each on their own “card”. 

function eachBook(){
  for(let i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i].title);
  }
}


// console.log(myLibrary);
eachBook()


const showButton = document.getElementById("show-form"); // button that opens the form
const dialog = document.getElementById("book-dialog"); // dialog to show/hide 
const bookForm = document.getElementById("book-form"); // get submmit event on form

showButton.addEventListener("click", () => {
  dialog.showModal()
})