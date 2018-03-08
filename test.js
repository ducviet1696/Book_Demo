const PublisherRepository = require('./src/publisher/publisher-repository');
const connection = require('./database/connection');
const PublisherFactory = require('./src/publisher/publisher-provider');

let repo = new PublisherRepository(connection);
let factory = new PublisherFactory();

a=repo.get(1)
    .then(function (result) {
        return result;
    });
a.then(result => {
    console.log(result)
});