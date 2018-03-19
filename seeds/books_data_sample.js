
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'Dac Nhan Tam', author: 'Dale Carnegie', publisher_id: 2, price: 12000},
        {title: 'Doi thay doi khi chung ta thay doi', author: 'Andrew Matthews', publisher_id: 1, price: 12000},
        {title: 'Chang Hobbit', author: 'J.R.R Tolkien', publisher_id: 1, price: 12000},
        {title: 'Cho toi xin mot ve di tuoi tho', author: 'Nguyen Nhat Anh', publisher_id: 1, price: 12000},
        {title: 'Toi thay ho vang tren co xanh', author: 'Nguyen Nhat Anh', publisher_id: 3, price: 12000}
      ]);
    });
};
