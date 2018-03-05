const Book = require('./book');

class BookFactory{

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    make(bookRaw) {
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setId(bookRaw.id);
        book.setPublisher(bookRaw.publisher);
        book.setPrice(bookRaw.price);
        return book;
    }
}

module.exports = BookFactory;
