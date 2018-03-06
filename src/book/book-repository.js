const Book = require('./book');
const Connection = require('../../database/connection');

class BookRepository{

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Book} book
     * @return {Promise <void>}
     */
    add(book) {
        console.log(book, book.getPublisher());
        return this.connection('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher_id: book.getPublisher().getId(),
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


}

module.exports = BookRepository;
