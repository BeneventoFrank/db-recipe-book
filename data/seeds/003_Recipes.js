
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Name: 'moms tacos'},
        {Name: 'moms pizza'},
        {Name: 'moms hot dogs'}
      ]);
    });
};
