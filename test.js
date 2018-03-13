const GetAllPublisher = require('./src/publisher/publisher-provider');
const connection = require('./database/connection');

let getall = new GetAllPublisher(connection);
getall.provideAll().then(function (result) {
    console.log(result);
});

