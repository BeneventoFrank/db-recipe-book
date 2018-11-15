
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      return knex('Ingredients').insert([
        {Name: 'cheese'},
        {Name: 'basil'},
        {Name: 'salt'},
        {Name: 'pepper'},
        {Name: 'milk'},
        {Name: 'eggs'},
      ]);
    });
};
