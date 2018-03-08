// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
      client : 'mysql',
      connection : {
          host    : process.env.DB_HOST,
          user    : process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_DATA
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
