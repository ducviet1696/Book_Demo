require('dotenv').config();

const connection = require('knex')({
    client: 'mysql',
    connection: {
        host    : process.env.DB_HOST,
        user    : process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATA
    },
    useNullAsDefault: true
});

module.exports = connection;