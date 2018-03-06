const Book = require('../../src/book/book');
const connection = require('../../database/connection');
const BookFactory = require('../../src/book/book-factory');

module.exports = function (req, res, next) {
    let book = new Book(req.body.title, req.body.author);
    book.setPrice(req.body.price);
    book.setId(req.body.id);

    //create publisher
    let factory = new BookFactory();
    connection.select()
        .from('publishers')
        .where({id : req.body.publisher_id})
        /*.then(results => {
            let publisher = new Publisher(results[0].name);
            publisher.setId(results[0].id);
            publisher.setAddress(results[0].address);
            publisher.setPhone(results[0].phone);
            return publisher;
        })*/
        .then((results) => results.map(element => factory.makeFromRequest(element)))
        .then(function (publisher) {
        book.setPublisher(publisher[0]);
        req.book = book;
        next();
    });
};