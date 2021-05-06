function Library(name, BOOKS, address) {

	this.name = name === undefined ? "unnamedName" : name;
	this.BOOKS = BOOKS; //array of books
	this.address = address === undefined ? "unnamedAddress" : address;

	this.numberOfMembers = BOOKS.length * 15; // unsettable!!



	this.printBooks = function () {
		if (BOOKS.length !== 0) {
			console.log(`Lets print all the books`);
			this.BOOKS.forEach(book => {
				console.log(book);
			});
		}
		else
			console.log(`You don't have any books :)`);
	}

	this.addBook = function (book) {
		this.BOOKS.push(Object.create(book));
	}

}

function Book(title, genre, libraries, authors) {
	this.title = title;
	this.genre = genre;
	this.libraries = libraries; //array of libraries
	this.authors = authors; //array of authors

	this.addLibrary = function (library) { // this method of the book accepts library objects
		this.libraries.push(library); //it adds the library object to the array of libraries of the Book
		library.BOOKS.push(this); //adding the library object to the Books property of Library 

	}

	this.removeLibrary = function (library) { //removing
		library.BOOKS.pop(this);// we remove it from here
		this.libraries.pop(library); //also we remove it also from here
	}
}

function Author(firstName, lastName, yearBirth) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearBirth = yearBirth; //number

	this.books = []; //empty book array,not settable

	this.currentBook = null; //not settable

	this.startBook = function (bookObject) {


		if (this.currentBook === null) { //for the first book only
			this.currentBook = bookObject; //za momentalnata kniga
			this.books.push(bookObject); //objektotBook go dodavame vo nizata books na avtorot



		}
		else {
			this.currentBook = bookObject;
			this.books.push(bookObject);
			bookObject.libraries.push(this);//that book should be transferred to Books
		}
	}
}
// StartBook - When the author calls StartBook the book should also be added to the Author property Books
//  ( The book that he is starting ). If there was another book in the
//  CurrentBook property, that book should be transferred to Books and then add the new Book as CurrentBook


let library1 = new Library("library1", [], "address1"); //the empty array is books
let library2 = new Library("library2", [], "address2"); //the empty array is books


let author1 = new Author("name1", "surname1", 1995);


let book1 = new Book("title1", "genre1", [], [author1]); //one book can be written by only one author
let book2 = new Book("title2", "genre2", [], [author1]); //the empty array is libraries
//the same author wrote the both books in this case


book1.addLibrary(library1);
console.log(library1);
book2.addLibrary(library1);
console.log(library1);            //one book can be in one or more libraries,
book2.addLibrary(library2);
console.log(library2);             // we add some books in some libraries

console.log(`============================`);

console.log(`BOOK 1 after ADD`);
console.log(book1);
console.log(`============================`);
console.log(`BOOK 2 after ADD`);
console.log(book2);
console.log(`============================`);
console.log(`LIBRARY 1 after ADD`);
console.log(library1);
console.log(`============================`);
console.log(`LIBRARY 2 after ADD`);
console.log(library2);

console.log(`============================`);
library1.printBooks();
console.log(`============================`);

library2.printBooks();

book2.removeLibrary(library1); //remove the book2 from library1
console.log(`============================`);
console.log(`Book 2 after removing`);
console.log(book2);
console.log(`============================`);
console.log(`Library 1 after removing`);
console.log(library1);



console.log(`============================`);
console.log(`The author will start the first book,that book will be the current book,the current book object:`);
author1.startBook(book1);
console.log(author1.currentBook);
console.log(`The current book title:`);
console.log(author1.currentBook.title);
console.log(`The author:`);
console.log(author1);

console.log(`============================`);
console.log(`The author will start the second book,now that book is the current book`);
author1.startBook(book2);
console.log(author1.currentBook);
console.log(`The current book title:`);
console.log(author1.currentBook.title);
console.log(`The author:`);
console.log(author1);


