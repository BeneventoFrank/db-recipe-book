
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Ingredients',function (table) {
        table.increments();
        table.string('Name');
        table.timestamps(true,true);
    } )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Ingredients')
};
