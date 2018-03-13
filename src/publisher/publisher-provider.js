const connection        = require('../../database/connection');
const PublisherFactory  = require('./publisher-factory');
const Publisher = require('./publisher');

class PublisherProvider {

    constructor(connection) {
        this.connection = connection;
    }

    provide(id) {
        return connection('publishers').where({'publishers.id': id})
            .then(results => results.map(element => {
                if(results[0]){
                    let publisher = new Publisher(element.name);
                    publisher.setId(element.id);
                    publisher.setAddress(element.address);
                    publisher.setPhone(element.phone);
                    return publisher;
                }
            }))
    }

    provideAll() {
        let factory = new PublisherFactory();
        return this.connection.select().from('publishers')
            .where({deleted_at: null})
            .then(publisherRaw => publisherRaw.map(element => factory.make(element)));
    }
}

module.exports = PublisherProvider;
