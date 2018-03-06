
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('books', function (table) {
        table.integer('publisher_id').alter();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('books', function (table) {
        table.string('publisher_id').alter();
    });
};
