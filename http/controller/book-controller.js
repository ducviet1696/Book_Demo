class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        console.log(request.book);
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(function () {
            response.status(201).send({message: "Success!"});
        }).catch(function (err) {
            next(err);
        });
    }

    deleteBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message:'Success'});
        }).catch(function (err) {
            next(err);
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
        });
    }


    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((results) => response.status(200).send(results.map(result => result.toJson())))
            .catch(next)
    }
}

module.exports = BookController;