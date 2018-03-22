class PublisherProvider {

    /**
     * 
     * @param connection
     * @param factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    /**
     *
     * @param id
     * @return {*|PromiseLike<Publisher>|Promise<Publisher>}
     */
    provide(id) {
        return this.connection.select().from('publishers')
            .where({deleted_at: null, id: id})
            .then(publisherRaw => publisherRaw.map(element => this.factory.make(element)))
    }

    /**
     *
     * @return {*|PromiseLike<Publisher>|Promise<Publisher>}
     */
    provideAll() {
        return this.connection.select().from('publishers')
            .where({deleted_at: null})
            .then(publisherRaw => publisherRaw.map(element => this.factory.make(element)));
    }
}

module.exports = PublisherProvider;
