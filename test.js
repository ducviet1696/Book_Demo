const BookFactoryFromReq = require('./src/book/book-factory-from-request');
const PublisherProvider = require('./src/publisher/publisher-provider');
const connection = require('./database/connection');
const Factory = require('./src/publisher/publisher-factory');

let publisher = new PublisherProvider(connection, new Factory);

let factoryReq = new BookFactoryFromReq(publisher);
let bookRaw = {
  title: 'test',
  author: 'test',
    publisher_id: 1,
  price: 12000
};
factoryReq.makeFromRequest(bookRaw).then(result => {
    console.log(result);
});