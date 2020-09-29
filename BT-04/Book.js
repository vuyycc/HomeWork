export default class Book {
    id;
    nameBook;
    author;
    typeBook;
    dateBuy;

    constructor(nameBook, author, typeBook, dateBuy) {
        this.id = uuid.v4();
        this.nameBook = nameBook;
        this.author = author;
        this.typeBook = typeBook;
        this.dateBuy = dateBuy;
    }

    updateBook(nameBook, author, typeBook, dateBuy){
        this.nameBook = nameBook;
        this.author = author;
        this.typeBook = typeBook;
        this.dateBuy = dateBuy;
    }

    showBook(){
        console.log(`ID: ${this.id} - Name: ${this.nameBook} - Author: ${this.author} - Type: ${this.typeBook} - Date Buy: ${this.dateBuy}`);
    }
}