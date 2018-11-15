
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Mixture',(table)=>{
      table.increments('Id');
      table.integer('RecipeId');
      table.foreign('RecipeId').references('Recipe.Id');
      table.integer('IngredientId');
      table.foreign('IngredientId').references('Ingredient.Id');
      table.real('Quantity');
      table.timestamps(true,true)

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Mixture')
};
