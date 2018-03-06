const Book = require('./src/book/book');
const BookRepository = require('./src/book/book-repository');
const Connection = require('./database/connection');
const BookFactory = require('./src/book/book-factory');
const PublisherFactory = require('./src/publisher/publisher-factory');
const Searcher = require('./src/search-services/searcher');
const AdvancedSearchCondition = require('./src/search-services/advance-search-condition');
const KeywordSearchCondition = require('./src/search-services/keyword-search-condition');

// let connection = new Connection();

let bookrawdata = {
    id: 3,
    title: 'Book',
    author: 'Author',
    publisher: 'nxb',
    price: 12000
};

let publisherRaw = {
    id: 2,
    name: 'NXB',
    address: 'HN',
    phone: '0167'
};
let bookfactory = new BookFactory();
let publisherFac = new PublisherFactory();
let publisher = publisherFac.make(publisherRaw);
console.log(bookfactory.make(bookrawdata,publisher));
// let repository = new BookRepository(Connection, new BookFactory());
// let book = new Book('Title1', 'Author1');
// book.setPublisher('NXB');
// book.setPrice(12000);
// book.setId(1);

// repository.add(book).then(function (books) {
//     console.log('ok', books);
// }, function (err) {
//     console.log(err);
// });

// let advancedCondition = new AdvancedSearchCondition('a', 'a', 'a');
// let keywordCondition = new KeywordSearchCondition('a');
// let searcher = new Searcher(Connection, bookfactory);
// searcher.search(keywordCondition).then(function (books) {
//     console.log(books);
// }, function(error){
//     console.log(error);
// });

// searcher.search(keywordCondition).then(function (books) {
//     console.log(books);
// }, function(error){
//     console.log(error);
// });