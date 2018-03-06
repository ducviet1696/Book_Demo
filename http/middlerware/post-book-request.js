const Book = require('../../src/book/book');
const Publisher = require('../../src/publisher/publisher');
const connection = require('../../database/connection');
const BookFactory = require('../../src/book/book-factory');

let factory = new BookFactory();
module.exports = function (req, res, next) {
    let book = new Book(req.body.title, req.body.author);

    // let publishers = [];
    book.setPrice(req.body.price);
    //create publisher
    connection.select()
        .from('publishers')
        .where({id : req.body.publisher_id})
        .then((results) => results.map(element => factory.makeFromRequest(element)))
        // {
        //     let publisher = new Publisher(results[0].name);
        //     publisher.setId(results[0].id);
        //     publisher.setAddress(results[0].address);
        //     publisher.setPhone(results[0].phone);
        //     return publisher;
        // })
        .then(function (publisher) {
            book.setPublisher(publisher[0]);
            req.book = book;
            next();
        });
};