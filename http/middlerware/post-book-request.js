module.exports = function (req, res, next) {
    req.app.get('book.factoryReq').makeFromRequest(req.body).then(result => {
        req.book = result;
        next();
    });
};