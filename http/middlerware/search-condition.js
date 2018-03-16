const MakerCondition = require('./../../src/search-services/maker-condition');

module.exports = (req, res, next) => {
    let maker = new MakerCondition();
    console.log(req.path);
    req.condition = maker.make(req);
    next();
};