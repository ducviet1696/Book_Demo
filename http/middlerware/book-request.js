const Book = require('../../src/book/book');
const Publisher = require('../../src/publisher/publisher');
const connection = require('../../database/connection');

module.exports = function (req, res, next) {
    let book = new Book(req.body.title, req.body.author);
    book.setPrice(req.body.price);
    //create publisher
    connection.select()
        .from('publishers')
        .where({id : req.body.publisher_id})
        .then(results => {
            let publisher = new Publisher(results[0].name);
            publisher.setId(results[0].id);
            publisher.setAddress(results[0].address);
            publisher.setPhone(results[0].phone);
            return publisher;
        }).then(function (publisher) {
            book.setPublisher(publisher);
            req.book = book;
            next();
        });
};