let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
const addExcitement = (sentence, character) => {
let buildMeUp = ""
let wordCount = null
for (let i = 0; i < sentence.length; i++) {
    wordCount++
    buildMeUp += `${sentence[i]} `
    buildMeUp += ' '
    if (wordCount % 3 === 0) buildMeUp += `${character} `
    console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, ':P')