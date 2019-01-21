// 1. Define an array that has the words of a sentence as its items.
// 2. Define a function that accepts an array of words.
// 3. The responsibility of the function is to build a sentence, as a single string, from the array of words and return it.
// 4. Pass your array to the function as an argument value.

// const words = [
//     "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."
// ]

// const sentenceBuilder = (array) => { 
//     const oddSentence = (words) => {
//         if (oddSentence % 2 !== 0) console.log ("The sentence has an odd number of words")
//         else console.log ("The sentence has an else number of words")
//         return words
//     }
//     array.join(" ")
//     console.log(array)
// }

// sentenceBuilder(brokenSentence)

// 1. Define a function that accepts a single string as an argument.
// 2. The responsibility of the function is to return a boolean (true/false) if the sentence has a odd number of words in it.
// 3. Take the return value of the first function, and pass it to the second.
// 4. `console.log()` the result of the second function

// Example:
// "The sentence has an even number of words"
// or 
// "The sentence has an odd number of words"


// I want you to create two functions:
// first function create a dollFactory that accepts an array as an argument
// -pass each item into the second function.
// second function hairMachine that accepts an item as an argument and adds hair to the item.
// - if the item has green or brown eyes add the property hairColor with the value "Brown"
// - if blue eyes "blonde"
// also change the hasHair value appropriately

const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: false }
  ]
  
const dollFactory = dolls => {
    dolls.forEach(doll => {
      hairMachine(doll)
  
      const dollHTML = createDollComponent(doll)
      printDoll(dollHTML)
    })
}
  
  
const hairMachine = doll => {
if (doll.eyeColor === "Green" || doll.eyeColor === "Brown") {
    doll.hasHair = true
    doll.hairColor = "Brown"
} else {
    doll.hasHair = true
    doll.hairColor = "Blonde"
}
}
  
  
const createDollComponent = completedDoll => {
    return `
    <div class="dollCard">
        <h2>${completedDoll.name}</h2>
        <p class=${completedDoll.eyeColor}>${completedDoll.eyeColor} eyes</p>
        <p>${completedDoll.hairColor} hair</p>
    </div>
    `
}

const printDoll = dollHTML => {
    document.querySelector("#dollListing").innerHTML += dollHTML
}
