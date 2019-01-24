// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })

// Make representation of data in HTML
const foodFactory = (foods) => {
    return `
        <div class="food">
            <h1>${foods.name}</h1>
            <p>${foods.category}</p>
            <p>${foods.ethnicity}</p>
        </div>
    `
}

// Map through array and pull out ingredients 
food.ingredients = productInfo.products.ingredients.map(i => {
    return `<li>${i.text}</li>`
}).join("")

// Append representation of data as HTML on Dom
const addFoodToDom = (food) => document.querySelector(".foodList").innerHTML += food

fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
        })
    })

// food.ingredients = productInfo.products.ingredients.reduce((p, c) => {
// return `${p}<li>${c.text}</li>`
// }).join("")