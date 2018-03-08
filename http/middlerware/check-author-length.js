module.exports = function (req, res, next) {
    if (req.body.author.length > 100) {
        return res.status(411).send({message: 'Author less is 100'});
    }
    next();
};