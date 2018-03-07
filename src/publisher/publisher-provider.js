const Publisher = require('./publisher');

class PublisherFactory {
    make(publisherRaw) {
        let publisher = new Publisher(publisherRaw.name);
        publisher.setAddress(publisherRaw.address);
        publisher.setPhone(publisherRaw.phone);
        publisher.setId(publisherRaw.id);
        return publisher;

    }
}

module.exports = PublisherFactory;
