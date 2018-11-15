
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Mixture').del()
    .then(function () {
      // Inserts seed entries
      return knex('Mixture').insert([
        {RecipeId: 1, IngredientId: 1, Quantity: 1 },
        {RecipeId: 1, IngredientId: 2, Quantity: 4 },
        {RecipeId: 1, IngredientId: 3, Quantity: 34 },
        
        {RecipeId: 2, IngredientId: 4, Quantity: 0 },
        {RecipeId: 2, IngredientId: 5, Quantity: 2 },
        {RecipeId: 2, IngredientId: 6, Quantity: 3 },

        {RecipeId: 3, IngredientId: 1, Quantity: 3 },
        {RecipeId: 3, IngredientId: 5, Quantity: 2 },
        {RecipeId: 3, IngredientId: 2, Quantity: 1 }

      ]);
    });
};
