// let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]

// let outputEl = document.querySelector("#output")

// const f = (array) => {
//     const correctOrder = array.reverse()
//     outputEl.innerHTML += correctOrder
// }

// f(hyperbole)


// console.log(hyperbole.reverse().join(" "))


// console.log(hyperbole.map(w => w.toUpperCase()).reverse().join(" "))

// fetch("https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/croninsw/events")
// .then(events => events.json())
// .then(parsedEvents => {
//     console.log(parsedEvents)
//     let latestmessage = parsedEvents[0].payload.commits[0].message

//     look at the console.log for your latest "Push Event"
//     parse that index in the array, and print your latest commit message to the DOM
// })

// I want you to put an event listener on the container div and when the font button is clicked I want the font to change
//     and when the color button is clicked I want the text color to change. Make the necessary changes to the HTML to get it
//     to work. You will need to make a css file with 2 classes on it! -->

const fontButton = document.querySelector("#font")
const colorButton = document.querySelector("#color")

const containerEl = document.querySelector("#container")
containerEl.addEventListener("click", (e)=> {
    if (e.target === font) containerEl.classList.toggle("addFont")
    if (e.target === color) containerEl.classList.toggle("addColor")
})