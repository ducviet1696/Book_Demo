const Book = require('./book');

class BookFactoryFromReq{
    constructor(PublisherProvide) {
        this.PublisherProvide = PublisherProvide
    }

    /**
     *
     * @param bookRaw
     * @return {PromiseLike<Publisher> | Promise<Publisher>}
     */
    makeFromRequest(bookRaw) {
        return this.PublisherProvide.provide(bookRaw.publisher_id)
            .then( publisher => {
                let book = new Book(bookRaw.title, bookRaw.author);
                book.setPublisher(publisher[0]);
                book.setPrice(bookRaw.price);
                book.setId(bookRaw.id);
                return book;
            })
    }
}

module.exports = BookFactoryFromReq;
