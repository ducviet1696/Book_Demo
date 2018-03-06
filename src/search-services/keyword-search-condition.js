class KeywordSearchCondition {

    /**
     *
     * @param {string} keyword
     */
    constructor (keyword){
        this.keyword = keyword;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery
            .where(function () {
            this.where('title', 'like', '%' + keyword + '%')
                .orWhere('author', 'like', '%' + keyword + '%')
                .orWhere('publisher', 'like', '%' + keyword + '%')
        }).where({deleted_at: null});
    }
}

module.exports = KeywordSearchCondition;
