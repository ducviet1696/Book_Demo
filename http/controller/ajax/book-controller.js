class BookController {

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    createBook(request, response, next) {
        request.app.get('books.repo').add(request.book)
            .then(() => response.redirect('/'))
            .catch(function (err) {
                next(err);
            });
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    deleteBook(request, response, next) {
        request.app.get('books.repo').remove(request.params.id).then(() => response.redirect('/'))
            .catch(function (err) {
                next(err);
            });
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    editBook(request, response, next) {
        request.app.get('books.repo').edit(request.book)
            .then(() => response.redirect('/'))
            .catch(function (err) {
                next(err);
            });
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((books) => response.status(200).json(books.map(book => book.toJson())))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    getDetail(request, response, next) {
        request.app.get('books.repo').detail(request.params.id)
            .then(books => books.map(book => request.app.get('book.factory').makeFromDB(book)))
            .then(books => response.render('detail.njk',{book: books[0]}))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    bookFromEdit(request, response, next) {
        let book = request.app.get('book.searcher').search(request.condition);
        let publisher = request.app.get('publishers.provider').provideAll();
        Promise.all([book, publisher])
            .then(bookEdit => response.render('edit-book.njk', {book: bookEdit[0][0], publishers: bookEdit[1]}))
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

}
module.exports = BookController;