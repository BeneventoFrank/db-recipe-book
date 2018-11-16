const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)


module.exports = {
    getDishes(){
        return db('Dishes').select(['Id','Name']).orderBy('Name')
    },
    getDish(id){
        return db('Dishes').select(['Id','Name']).where('Id',id)    
    },
    addDish(dish){
       const id = db('Dishes').insert(dish);
       return id;
    },
    addRecipe(recipe){
        const id = db('Recipes').insert(recipe);
        return id;
    },
    getRecipes(){
        return db('Recipes').select('Id','Name').orderBy('Name')
    },
    getShoppingList(DishId){

    const x =  db.from('Ingredients')
          .innerJoin('Mixture','Mixture.IngredientId', 'Ingredients.Id')
          .innerJoin('Recipes','Recipes.Id', 'Mixture.RecipeId')
          .innerJoin('Dishes', 'Dishes.RecipeId','Recipes.Id')
          .select('Ingredients.Name')
          .where('Dishes.Id',DishId)
    return x
    }

}