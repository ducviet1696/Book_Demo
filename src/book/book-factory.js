const Book = require('./book');
const Publisher = require('../publisher/publisher');

class BookFactory{

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    makeFromDB(bookRaw) {
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

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    makeFromRequest(bookRaw) {
        let publisher = new Publisher(bookRaw.name);
        publisher.setId(bookRaw.id);
        publisher.setAddress(bookRaw.address);
        publisher.setPhone(bookRaw.phone);
        return publisher;
    }
}

module.exports = BookFactory;
