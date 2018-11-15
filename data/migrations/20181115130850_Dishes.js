
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Dishes',(table)=>{
        table.increments('Id');
        table.string('Name').notNullable();
        table.integer('RecipeId')
        table.foreign('RecipeId').references('Recipe.Id')
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Dishes')
};
