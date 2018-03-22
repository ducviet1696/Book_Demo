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
        return this.connection('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher_id: book.getPublisher() ? book.getPublisher().getId():null,
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
            publisher_id: book.getPublisher().getId(),
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

    detail(id) {
        return this.connection().select('books.id', 'books.title', 'books.author', 'books.publisher_id', 'books.price', 'publishers.name', 'publishers.address', 'publishers.phone')
            .from('books')
            .innerJoin('publishers', function () {
                this.on('publisher_id', '=', 'publishers.id')
            })
            .where({'books.id': id});
    }
}

module.exports = BookRepository;
