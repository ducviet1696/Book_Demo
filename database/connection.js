const connection = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '1',
        database : 'bookdemo'
    },
    useNullAsDefault: true
});

module.exports = connection;