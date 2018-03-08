module.exports = function (req, res, next) {
    if (!req.body.author) {
        return res.status(411).send({message: 'Author must not Null'})
    }
    next();
};