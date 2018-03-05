const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-controller');

let bookController = new BookController();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', bookController.getAll);
router.post('/book', bookController.createBook);
router.put('/book', bookController.editBook);
router.delete('/book/:id', bookController.deleteBook);


module.exports = router;
