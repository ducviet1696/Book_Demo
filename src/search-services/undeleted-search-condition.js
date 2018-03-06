class UndeletedSearchCondition {

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where({'books.deleted_at': null})
    }
}

module.exports = UndeletedSearchCondition;
