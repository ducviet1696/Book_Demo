
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function (table) {
        table.increments('id');
        table.string('title').notNull();
        table.string('author').notNull();
        table.string('publisher');
        table.float('price');
        table.dateTime('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};
