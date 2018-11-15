
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Recipes',(table)=>{
        table.increments();
        table.string('Name').notNullable();
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Recipes');
};
