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
        let factory  = this.factory;
        let sqlQuery = this.connection.select('id', 'title', 'author', 'publisher', 'price', 'deleted_at').from('books');
        condition.describe(sqlQuery);
        console.log(sqlQuery.toSQL().sql);
        return sqlQuery.then(results => results.map(element => factory.make(element)));
    }
}

module.exports = Searcher;
