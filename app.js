const express           = require('express');
const path              = require('path');
const logger            = require('morgan');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const BookRepository    = require('./src/book/book-repository');
const connection        = require('./database/connection');
const BookFactoryDB     = require('./src/book/book-factory-from-db');
const BookFactoryReq    = require('./src/book/book-factory-from-request');
const PublisherFactory  = require('./src/publisher/publisher-factory');
const PublisherProvider = require('./src/publisher/publisher-provider');
const Searcher          = require('./src/search-services/searcher');
const nunjucks          = require('nunjucks');

const index = require('./routes/index');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let publisherProvider = new PublisherProvider(connection, new PublisherFactory);

app.set('books.repo', new BookRepository(connection));
app.set('book.searcher', new Searcher(connection, new BookFactoryDB()));
app.set('book.factory', new BookFactoryDB());
app.set('publishers.provider', new PublisherProvider(connection, new PublisherFactory()));
app.set('book.factoryReq', new BookFactoryReq(publisherProvider));

app.use('/', index.Ajax);

module.exports = app;
