class BookController {

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    getAll(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((books) => response.render('list-book.njk', {books: books}))
            .catch(function (err) {
                next(err);
            })
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    detail(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(books => {
                if (!books.length) {
                    throw new Error('no book');
                }
                response.render('detail.njk', {book: books[0]})
            })
            .catch(next)
    }
}
module.exports = BookController;