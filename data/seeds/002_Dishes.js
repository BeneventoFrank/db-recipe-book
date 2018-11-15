
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Dishes').insert([
        {Name: 'tacos', RecipeId:'1'},
        {Name: 'pizza', RecipeId:'2'},
        {Name: 'hot dogs', RecipeId:'3'}
      ]);
    });
};
