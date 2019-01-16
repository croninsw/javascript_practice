
// CHICKEN MONKEY
// for (let i = 1; i <= 100; i++) {
//     if (i % 35 == 0) console.log('ChickenMonkey')
//     else if (i % 7 == 0) console.log('Monkey')
//     else if (i % 5 == 0) console.log('Chicken')
//     else console.log(i)
// }

// for (let currentNumber = 1; currentNumber < 100; currentNumber++) {
//     let output = `${currentNumber}: `
//     if (currentNumber % 5 == 0) {
//         output += 'Chicken'
//     }
//     if (currentNumber % 7 == 0) {
//         output += 'Monkey'
//     }
//     console.log(output)
// }

// BATTLE OF THE BANDS
// let bandNumber = 1
// const takeNumber = bandName => `${bandNumber++}. ${bandName}`

// console.log(takeNumber('soup'))
// takeNumber('after the fall')

// COOKOUT

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// // An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// // // An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    currentObject.cooked = true;
    cookedFood.push(currentObject);
}

for (let i = 0; i < uncookedFood.length; i++) {
    let currentObject = uncookedFood[i];
    grill(currentObject);
}

console.log(cookedFood)

