
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('books', function (table) {
        table.renameColumn('publisher', 'publisher_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('books', function (table) {
        table.renameColumn('publisher_id', 'publisher');
    });
};
