const AdvanceSearchCondition = require('../../src/search-services/advance-search-condition');
const KeywordSearchCondition = require('../../src/search-services/keyword-search-condition');
const UnDeletedSearchCondition = require('../../src/search-services/undeleted-search-condition');
const IdSearchCondition = require('../../src/search-services/id-search-condition');

module.exports = (req, res, next) => {
    console.log(req.path);
    req.condition = makeCondition(req);
    next();
};
function makeCondition(request) {
    if(request.path === '/search-advance') {
        return new AdvanceSearchCondition(request.query.title, request.query.author, request.query.publisher);
    } else if (request.path === '/search-basic'){
        return new KeywordSearchCondition(request.query.keyword);
    } else if (request.path === '/books'){
        return new UnDeletedSearchCondition();
    } else if (request.path.toString().startsWith('/book/')) {
        return new IdSearchCondition(request.params.id);
    }
}