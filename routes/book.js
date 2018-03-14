const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-controller');
const condition = require('../src/search-services/');
const check = require('./../http/middlerware/index');

let bookController = new BookController();
let checkUpData = [check.checkTitleNull, check.checkAuthorNull, check.checkTitleLength, check.checkAuthorLength];

router.get('/', function (req, res, next) {
    req.condition = new condition.UnDeletedSearch();
    next();
}, bookController.getAll);

router.get('/detail/:id', function (req, res, next) {
    req.condition = new condition.IdSearch(req.params.id);
    next();
}, bookController.detail);

router.get('/edit/:id', function (req, res, next) {
    req.condition = new condition.IdSearch(req.params.id);
    next();
}, bookController.bookFromEdit);

router.post('/edit-book', checkUpData, check.putBookRequest, bookController.editBook);

router.get('/create', bookController.bookFromCreate);

router.post('/create-book', checkUpData, check.postBookRequest, bookController.createBook);

router.get('/delete/:id', bookController.deleteBook);

router.get('/search/keyword', function (req, res, next) {
    req.condition = new condition.KeywordSearch(req.query.keyword);
    next();
}, bookController.getAll);

router.get('/search', function(req, res) {
    res.render('advanced-search.njk');
});

router.get('/search/advanced', function (req, res, next) {
   req.condition = new condition.AdvanceSearch(req.query.title, req.query.author, req.query.publisher);
   next();
}, bookController.getAll);

module.exports = router;
