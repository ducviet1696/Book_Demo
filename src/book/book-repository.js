const Book = require('./book');
const Connection = require('../../database/connection');
const BookFactory = require('./book-factory');

class BookRepository{

    /**
     *
     * @param {Connection} connection
     * @param {BookFactory} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    /**
     *
     * @param {Book} book
     * @return {Promise <void>}
     */
    add(book) {
        return this.connection('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher: book.getPublisher(),
            price: book.getPrice()
        });
    }

    /**
     *
     * @param {Book} book
     * @return {Promise <void>}
     */
    edit(book) {
        return this.connection('books').update({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher: book.getPublisher(),
            price: book.getPrice()
        }).where({
            id: book.getId()
        });
    }

    /**
     *
     * @return {Book[]}
     */
    all() {
        return this.connection.column(['id','title','author','publisher','price'])
            .select().from('books').where({deleted_at:null})
            .then(books =>{return books.map((bookRaw) => {
                return this.factory.make(bookRaw);
            })});
    }

    /**
     *
     * @param {INT} id
     * @return {Promise <void>}
     */
    remove(id) {
        return this.connection('books').update({
            deleted_at: new Date().toLocaleString()
        }).where({
            id: id
        });
    }

    /**
     *
     * @param {INT} id
     * @return {Promise <Book>}
     */
    get(id){
        return this.connection.column(['id','title','author','publisher','price'])
            .select().from('books').where({deleted_at:null, id: id})
            .then(books =>{return books.map((bookRaw) => {
                return this.factory.make(bookRaw);
            })});
    }

}

module.exports = BookRepository;
