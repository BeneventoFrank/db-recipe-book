const dbHelper = require('./data/dbHelper')

dbHelper.getDishes().then(res=>{
    console.log('res..',res)
    console.log('\n.................')
})
    

dbHelper.getDish(1).then(res=>{
    console.log('res..',res)
    console.log('\n.................')
})

dbHelper.addDish({Name:'top shelf pizza',RecipeId:2})
        .then(res=>{
                    console.log('res..',res)
                    console.log('\n.................')
                   })
        .catch(error=>console.log('error:',error))

dbHelper.addRecipe({Name:"Megs Apple Pie"})
        .then(res=>{
            console.log('res..',res)
            console.log('\n.................')
        })
        .catch(error=>console.log('error:',error))

dbHelper.getRecipes().then(res=>{
                                console.log('res..',res)
                                console.log('\n.................')
                                })
                     .catch(error=>console.log('error:',error))

dbHelper.getShoppingList(2).then(res=>console.log('res...',res))