
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {Description: 'prepare the taco shells',SequenceNumber:1,recipeId:1},
        {Description: 'cook the meat',SequenceNumber:2,recipeId:1},
        {Description: 'get stuff ready ',SequenceNumber:3,recipeId:1}
      ]);
    });
};
