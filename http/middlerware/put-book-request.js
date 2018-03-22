module.exports = function (req, res, next) {
    req.app.get('book.factoryReq').makeFromRequest(req.body).then(result => {
            result.setId(req.params.id);
            req.book = result;
            next();
        }
    )
};