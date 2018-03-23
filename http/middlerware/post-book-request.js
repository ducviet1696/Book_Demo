module.exports = function (req, res, next) {
    req.app.get('book.factoryReq').make(req.body).then(result => {
        req.book = result;
        next();
    });
};