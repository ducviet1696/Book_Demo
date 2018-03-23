const Book = require('./book');
const Publisher = require('../publisher/publisher');

class BookFactoryFromDB{

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    make(bookRaw) {

        let book = new Book(bookRaw.title, bookRaw.author);
        book.setId(bookRaw.id);
        book.setPrice(bookRaw.price);

        let publisher = new Publisher(bookRaw.name);
        publisher.setId(bookRaw.publisher_id);
        publisher.setAddress(bookRaw.address);
        publisher.setPhone(bookRaw.phone);

        book.setPublisher(publisher);
        return book;
    }
}

module.exports = BookFactoryFromDB;
