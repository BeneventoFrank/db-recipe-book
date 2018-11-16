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
    getRecipes(){
        return db('Recipes').select('Id','Name').orderBy('Name')
    },
    addRecipe(recipe){
        const id = db('Recipes').insert(recipe);
        return id;
    }


}