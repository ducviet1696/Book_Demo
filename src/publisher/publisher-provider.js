const Publisher = require('./publisher');
const connection = require('../../database/connection');

class PublisherProvider {
    provide(id) {
        return connection.select().from('publishers')
            .where({id: id})
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
}

module.exports = PublisherProvider;
