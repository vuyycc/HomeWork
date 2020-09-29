import BookCase from "./BookCase.js";
import Book from "./Book.js";
 class App {
     books;
     bookcases;

     constructor(){
         this.books = [];
         this.bookcases = [];
     }

     addBookCase() {
         let maxBook = Number(prompt("Input max books: "));
        let bc = new BookCase(maxBook);
        this.bookcases.push(bc);
     }

     deleBookCase() {
         let idDele = prompt("Input id you want delete :");
         this.bookcases = this.bookcases.filter(function(bookcases) {
             return bookcases.id != idDele;
         })
     }

     updateBC(){
         let idBC = prompt("Input new id book: ");
         let maxBook = Number(prompt("Input new max book: "));

         let findBC = this.bookcases.find(function(bookcase) {
             return bookcase.id == idBC;
         })

         if(findBC != null){
             findBC.update(maxBook);
         }
     }

     addQues(){
         let name = prompt("Input new book name: ");
         let author = prompt("Input author: ");
         let typeB = prompt("Input Book type: ");
         let dateBuy = prompt("Input date buy:");

         let books = new Book(name, author, typeB, dateBuy);
         if(books != null){
             this.books.push(books);
         }
     }

     

 }