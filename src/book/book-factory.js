const Book = require('./book');
const Publisher = require('../publisher/publisher');
const PublisherFactory = require('../publisher/publisher-provider');
const PublisherProvider= require('../publisher/publisher-provider');
const connection = require('../../database/connection');


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
     * @param bookRaw
     * @return {PromiseLike<Publisher> | Promise<Publisher>}
     */
    makeFromRequest(bookRaw) {
        let publisherProvider = new PublisherProvider();
        return publisherProvider.provide(bookRaw.publisher_id)
        .then( publisher => {
            let book = new Book(bookRaw.title, bookRaw.author);
            book.setPublisher(publisher[0]);
            book.setPrice(bookRaw.price);
            book.setId(bookRaw.id);
            return book;
        })
    }
}

module.exports = BookFactory;
