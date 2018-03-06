class IdSearchCondition {

    constructor(bookId) {
        this.bookId = bookId;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where({deleted_at: null, id: this.bookId})
    }
}

module.exports = IdSearchCondition;
