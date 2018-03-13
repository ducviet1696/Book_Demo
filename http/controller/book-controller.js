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

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    bookFromCreate(request, response, next) {
        request.app.get('publishers.provider').provideAll()
            .then(publishers => response.render('create-book.njk', {publishers: publishers}))
            .catch(next)
    }

    bookFromEdit(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(books => response.render('edit-book.njk', {book: books[0]}))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    createBook(request, response, next) {
        request.app.get('books.repo')
        .add(request.book).then(() => {
            response.redirect('/');
        }).catch((err) => {
                next(err);
            });
    }

    editBook(request, response, next) {
        request.app.get('books.repo')
        .edit(request.book).then(() => {
            response.redirect('/');
        }).catch((err) => {
                next(err);
            });
    }

    deleteBook(request, response, next) {
        request.app.get('books.repo')
            .remove(request.params.id).then(() => {
            response.redirect('/');
        })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = BookController;