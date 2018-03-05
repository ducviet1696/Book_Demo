const Book = require('./src/book/book');
const BookRepository = require('./src/book/book-repository');
const Connection = require('./database/connection');
const BookFactory = require('./src/book/book-factory');
const Searcher = require('./src/search-services/searcher');
const AdvancedSearchCondition = require('./src/search-services/advance-search-condition');
const KeywordSearchCondition = require('./src/search-services/keyword-search-condition');

// let connection = new Connection();

// let bookrawdata = {
//     id: 3,
//     title: 'Book',
//     author: 'Author',
//     publisher: 'nxb',
//     price: 12000
// };
let bookfactory = new BookFactory();
// console.log(bookfactory.make(bookrawdata));
// let repository = new BookRepository(Connection, new BookFactory());
// let book = new Book('Title1', 'Author1');
// book.setPublisher('NXB');
// book.setPrice(12000);
// book.setId(1);

// repository.all().then(function (books) {
//     console.log('ok', books);
// }, function (err) {
//     console.log(err);
// });

let advancedCondition = new AdvancedSearchCondition('t', 'a', 'nb');
let keywordCondition = new KeywordSearchCondition('t');
let searcher = new Searcher(Connection, bookfactory);
searcher.search(advancedCondition).then(function (books) {
    console.log(books);
}, function(error){
    console.log(error);
});
searcher.search(keywordCondition).then(function (books) {
    console.log(books);
}, function(error){
    console.log(error);
});