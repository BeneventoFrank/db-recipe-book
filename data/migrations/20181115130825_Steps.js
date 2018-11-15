
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Steps', (table)=>{
    table.increments('Id');
    table.integer('RecipeId').notNullable();
    table.foreign('RecipeId').references('Recipes.Id')
    table.string('Description').notNullable();
    table.integer('SequenceNumber').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Steps')
};
