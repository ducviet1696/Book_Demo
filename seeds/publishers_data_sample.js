
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {id: 1, name: 'NXB Kim Dong', address: 'HN', phone:'0189'},
        {id: 2, name: 'NXB Giao Duc', address: 'HN', phone:'0189'},
        {id: 3, name: 'NXB Nha Nam', address: 'HN', phone:'0189'}
      ]);
    });
};
