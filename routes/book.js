const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-controller');
const condition = require('../src/search-services/');
const check = require('./../http/middlerware/index');


let bookController = new BookController();

router.get('/', function (req, res, next) {
    req.condition = new condition.UnDeletedSearch();
    next();
}, bookController.getAll);

router.get('/detail/:id', function (req, res, next) {
    req.condition = new condition.IdSearch(req.params.id);
    next();
}, bookController.detail);

router.get('/create', bookController.bookFromCreate);

router.post('/create-book', check.postBookRequest, bookController.createBook);

module.exports = router;
