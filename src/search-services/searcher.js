const Connection = require('../../database/connection');
const BookFactory = require('../book/book-factory');

class Searcher {

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
     * @param condition
     * @return Book[]
     */
    search(condition) {
        let sqlQuery = this.connection('books').column(['id','title','author','publisher','price'])
        return condition.describe(sqlQuery)
            .then(books =>{return books.map((bookRaw) => {
            return this.factory.make(bookRaw);
        })});
    }
}

module.exports = Searcher;
