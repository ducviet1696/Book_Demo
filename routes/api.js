const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/api/book-controller');
const check = require('../http/middlerware');

let bookController = new BookController();

let checkUpData = [check.checkTitleNull, check.checkAuthorNull, check.checkTitleLength, check.checkAuthorLength];

router.get('/books', check.searchCondition, bookController.search);
router.get('/book/:id', check.searchCondition, bookController.search);
router.post('/book', checkUpData, check.postBookRequest, bookController.createBook);
router.put('/book', checkUpData, check.putBookRequest, bookController.editBook);
router.delete('/book/:id', bookController.deleteBook);
router.get('/search-advance', check.searchCondition, bookController.search);
router.get('/search-basic', check.searchCondition, bookController.search);

module.exports = router;
