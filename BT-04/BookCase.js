import Book from "./Book.js";

export class BookCase {
    id;
    maxBook;
    books;
    dateCreate;
    count;

    constructor(maxBook){
        this.id = uuid.v4();
        this.maxBook = maxBook;
        this.books = new Array();
        this.dateCreate = new Date().toISOString();
        this.count = 0;
    }

    addBook(book) {
        if(book instanceof Book){
            if(count < maxBook){
                this.books.push(book);
                this.count++;
            }else {
                alert("The BookCase is full");
            }
        }
    }

    deteBook(idBook) {
        this.books = this.books.filter(function(book){
            return book.id != idBook;
        })
        this.count--;
    }

    update(maxBook){
        this.maxBook = maxBook;
    }

    searchBook(){
        let name = prompt("You want find to NameBook(n), Author(a),Type(t)? ");
        let strFind = prompt("Input: ");

        if(name == 'n'){
         this.books = this.books.filter(function(book) {
             return book.nameBook != strFind; 
         })
        }
        else if ( name == 'a'){           
                this.books = this.books.filter(function(book) {
                    return book.author != strFind; 
                })
        }
        else if(name == 't'){
            this.books = this.books.filter(function(book) {
                return book.typeBook != strFind; 
            })
        }else alert("Dont Find");


       this.showBC();
    }

    showBC(){
        this.books.forEach((book) => {
            book.showBook();
        }) ;
    }
}