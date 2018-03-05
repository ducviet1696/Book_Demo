class BookController {

    constructor() {

    }

    getAll(request, response) {
        let bookRepo = request.app.get('books.repo');
        bookRepo.all().then(function (books) {
            let results = books.map(function (element) {
                return element.toJson();
            });
            response.status(200).send(results);
        });
    }

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(function () {
            response.status(201).send({message: "Success!"});
        }).catch(function (err) {
            next(err);
        });
    }

    deleteBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    bookById(request, response) {
        let repo = request.app.get('books.repo');
        repo.get(request.params.id).then(function (books) {
            let results = books.map(function (element) {
                return element.toJson();
            });
            response.status(200).send(results);
        });
    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((results) => response.status(200).send(results.map(result => result.toJson())))
            .catch(next)
    }
}

module.exports = BookController;