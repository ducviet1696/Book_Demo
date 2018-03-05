class AdvancedSearchCondition {

    constructor (title, author, publisher){
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
    return sqlQuery.where('author', 'like', '%'+this.author+'%')
            .where('title', 'like', '%'+this.title+'%')
            .where('publisher', 'like', '%'+this.publisher+'%')
            .where({deleted_at: null})
    }
}

module.exports = AdvancedSearchCondition;
