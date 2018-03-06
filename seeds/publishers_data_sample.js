
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {id: 1, name: 'rowValue1', address: 'HN', phone:'0189'},
        {id: 2, name: 'rowValue1', address: 'HN', phone:'0189'},
        {id: 3, name: 'rowValue1', address: 'HN', phone:'0189'}
      ]);
    });
};
