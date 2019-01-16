// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }

// // Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

// const memberName = beatles['members'][1]['name'];
// const bandDate = `${beatles['history']['formed']} to ${beatles['history']['disbanded']}`;
// const memberBd = beatles['members'][1]['birth'];
// const albumWork = beatles['albums'][3]
// console.log(`${memberName} was in the Beatles from ${bandDate}. He was born in ${memberBd} He contributed heavily on the ${albumWork} Album.`);

// 1. Design a function named `evenOrOdd` that take a single number as an argument.
// 2. It should return the string "Even" if the number is evenly divisible by two.
// 3. It should return the string "Odd" if the number is not evenly divisible by two.

// Use the modulo - or remainder - operator in JavaScript to accomplish this.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()


// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

const evenOrOdd = (num) => {
    if (num % 2 == 0) console.log("Even");
    else if (num % 2 !== 0) console.log("Odd");
}

const arrayOfNumbers = [1, 1, 2, 4, 5, 66, 45, 999, 3452];

// arrayOfNumbers.forEach(currentNumber => {
//     const itWasEvenOrOdd = evenOrOdd(currentNumber)
//     console.log(itWasEvenOrOdd)
// })

arrayOfNumbers.forEach(currentNumber => console.log(evenOrOdd(currentNumber)))
// evenOrOdd(23);

// 1. Create an array of numbers. Some even, some odd.
// 2. Iterate the array and invoke the `evenOrOdd` passing the current number as the argument.
// 3. Use `console.log` to display the result in the Developer Console.



//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//         const evenOrOdd = (num) => {
//         if (num % 2 == 0) console.log("Even");
//         else if (num % 2 !== 0) console.log("Odd");
//         }
// }
















