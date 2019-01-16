
// const age = 30
// const timeSpan = 25
// const futureAge = age + timeSpan
// const name = "Biff"
// const generationStereotype = "millenial"
// const dadJoke = "milleni-old"

// console.log(`Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`)

// Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
// Now access it using a variable called "meaning": let meaning = "meaning_of_life"
let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life
console.log(meaning)

let meaning2 = "meaning_of_life"

let meaningoflife2 = hitchhikers_guide.random_facts.ultimate_answer[meaning2];

console.log(meaningoflife2)

