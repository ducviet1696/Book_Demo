const condition = require('./index');

class MakerCondition {
    make(request) {
        if (request.path === '/search-advance') {
            return new condition.AdvanceSearch(request.query.title, request.query.author, request.query.publisher);
        } else if (request.path === '/search-basic') {
            return new condition.KeywordSearch(request.query.keyword);
        } else if (request.path === '/books') {
            return new condition.UnDeletedSearch();
        } else if (request.path.toString().startsWith('/book/')) {
            return new condition.IdSearch(request.params.id);
        }
    }
}

module.exports = MakerCondition;
