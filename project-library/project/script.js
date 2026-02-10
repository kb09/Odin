
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




eachBook()


const showButton = document.getElementById("show-form"); // button that opens the form
const dialog = document.getElementById("book-dialog"); // dialog to show/hide 
const bookForm = document.getElementById("book-form"); // get submmit event on form

showButton.addEventListener("click",function(){
  dialog.showModal()
})

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();


const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const hasRead = document.getElementById("read").checked;


addBookToLibrary(title, author, pages, hasRead);

displayBooks();
bookForm.reset();
dialog.close();


});


//display cards

const display = document.getElementById("library-display");

function displayBooks() {
  // Clear the display so we don't duplicate books
  display.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // Create the card div
    const card = document.createElement("div");
    card.classList.add("book-card");

    // Add content to the card
    card.innerHTML = "<h3>" + book.title + "</h3>" +
                     "<p>Author: " + book.author + "</p>" +
                     "<p>Pages: " + book.numOfPages + "</p>" +
                     "<p>" + book.getReadStatus() + "</p>";

    // Attach the card to the display container
    display.appendChild(card);
  }
}

// Call it once at the bottom of your script so initial books show up
displayBooks();
