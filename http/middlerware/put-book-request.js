module.exports = function (req, res, next) {
    let factory = req.app.get('book.factory');
    factory.makeFromRequest(req.body).then(result => {
            result.setId(req.params.id);
            req.book = result;
            next();
        }
    )
};