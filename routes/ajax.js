const express        = require('express');
const router         = express.Router();
const BookController = require('../http/controller/ajax/book-controller');
const check          = require('../http/middlerware');
const condition = require('../src/search-services/');

let bookController = new BookController();

let checkUpData = [check.checkTitleNull, check.checkAuthorNull, check.checkTitleLength, check.checkAuthorLength];

router.get('/', function (req, res) {
    res.render('home.njk');
});
router.get('/books', check.searchCondition, bookController.search);

router.get('/book/:id', bookController.getDetail);

router.get('/create', bookController.bookFromCreate);
router.post('/create-book', checkUpData, check.postBookRequest, bookController.createBook);

router.get('/edit/:id', function (req, res, next) {
    req.condition = new condition.IdSearch(req.params.id);
    next();
}, bookController.bookFromEdit);
router.post('/edit-book/:id', checkUpData, check.putBookRequest, bookController.editBook);

router.get('/delete/:id', bookController.deleteBook);

router.get('/search', function(req, res) {
    res.render('advanced-search.njk');
});

router.get('/search', function(req, res) {
    res.render('advanced-search.njk');
});
router.get('/search-advance', check.searchCondition, bookController.search);
router.get('/search-basic', check.searchCondition, bookController.search);

module.exports = router;
