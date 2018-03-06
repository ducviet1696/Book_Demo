
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'rowValue1', author: 'tac gia', publisher_id: 1, price: 12000},
        {title: 'rowValue1', author: 'tac gia', publisher_id: 1, price: 12000},
        {title: 'rowValue1', author: 'tac gia', publisher_id: 1, price: 12000},
        {title: 'rowValue1', author: 'tac gia', publisher_id: 1, price: 12000},
        {title: 'rowValue1', author: 'tac gia', publisher_id: 1, price: 12000}
      ]);
    });
};
