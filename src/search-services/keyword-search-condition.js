class KeywordSearchCondition {

    constructor (keyword){
        this.keyword = keyword;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where(function(){
            this.where('author', 'like', '%'+this.keyword+'%')
                .orWhere('title', 'like', '%'+this.keyword+'%')
                .orWhere('publisher', 'like', '%'+this.keyword+'%')
        })
            .where({deleted_at: null})
    }
}

module.exports = KeywordSearchCondition;
