const AdvanceSearchCondition = require('../../src/search-services/advance-search-condition');
const KeywordSearchCondition = require('../../src/search-services/keyword-search-condition');

module.exports = (req, res, next) => {
    req.condition = makeCondition(req);
    next();
    console.log(req.condition);
};
function makeCondition(request) {
    if(request.path === '/search-advance') {
        return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
    } else if (request.path === '/search-basic'){
        return new KeywordSearchCondition(request.query.keyword);
    }
}