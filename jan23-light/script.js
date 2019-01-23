
// Audrey Scroll Event
// const audrey = document.getElementById("audrey")

// window.addEventListener("scroll", (event => {
//     audrey.style.width = `${window.scrollY / 3}px`
//     audrey.style.height = `${window.scrollY / 4}px`
//     })
// )

// Mirror Mirror
// const inputEl = document.getElementById("message")
// const redbox = document.getElementById("redbox")
// const bluebox = document.getElementById("bluebox")
// inputEl.addEventListener("keyup", function (event) {
//     redbox.innerHTML = event.target.value
//     bluebox.innerHTML = event.target.value
// })

// Superpowers  FLIGHT
// const flight = document.getElementById("flight")
// const flightHandlerFunction = (newClass) => {
//     flight.classList.toggle(newClass)
// }

// document.querySelector("#activate-flight").addEventListener("click", function() {
//     flightHandlerFunction("enabled")
// })
// MINDREAD
// const mindreading = document.getElementById("mindreading")
// const mindreadingHandlerFunction = (newClass) => {
//     mindreading.classList.toggle(newClass)
// }

// document.querySelector("#activate-mindreading").addEventListener("click", function() {
//     mindreadingHandlerFunction("enabled")
// })
// XRAY
// const xray = document.getElementById("xray")
// const xrayHandlerFunction = (newClass) => {
//     xray.classList.toggle(newClass)
// }

// document.querySelector("#activate-xray").addEventListener("click", function() {
//     xrayHandlerFunction("enabled")
// })
// ACTIVATE ALL
// const addAll = document.querySelectorAll(".disabled")
// const addAllHandlerFunction = (newClass) => {
//     for (let i = 0; i < addAll.length; i++) {
//         addAll[i].classList.toggle(newClass)
//     }
// }

// document.querySelector("#activate-all").addEventListener("click", function() {
//     addAllHandlerFunction("enabled")
// })
// DEACTIVATE
// const deactivateAll = document.querySelectorAll(".enabled")
// const deactivateAllHandlerFunction = (newClass) => {
//     for (let i = 0; i < addAll.length; i++) {
//         deactivateAll[i].classList.toggle(newClass)
//     }
// }

// document.querySelector("#deactivate-all").addEventListener("click", function() {
//     addAllHandlerFunction("disabled")
// })

// GENERIC POWER
// const powerHandlerFunction = function (event) {
//     let power = event.target.id.replace("activate-", "")
//     let classesToSwitch = ["disabled", "enabled"];
//     classesToSwitch.forEach(className => {
//         document.querySelector(`#${power}`).classList.toggle(className)
//     })
// }

// document.querySelector("#activate-flight").addEventListener("click", powerHandlerFunction)

// document.querySelector("#activate-mindreading").addEventListener("click", powerHandlerFunction)

// document.querySelector("#activate-xray").addEventListener("click", powerHandlerFunction) 

// Card Creator
// let cardsId = 0
// const inputEl = document.querySelector("#createCardInput")
// const outputEl = document.querySelector(".outputDiv")
// const submitButton = document.querySelector("#createCardButton")

// const cardHTML = (content) => {
//     return `
//         <article class="card" id="card--${cardsId}">
//             <div>${content}</div>
//             <div>
//                 <button id="delete--${cardsId}">Delete This Card</button>
//             </div>
//         </article>
//     `
// }

// const deleteHTML = function () {
//     if (event.target.id.startsWith("delete")) {
//         let id = event.target.id.split("--")[1]
//         let sick = document.querySelector(`#card--${id}`)
//         outputEl.removeChild(sick)
//     }
// }

// submitButton.addEventListener("click", (e) => {
//     cardsId++
//     const capturedText = inputEl.value
//     outputEl.innerHTML += cardHTML(capturedText)
// })

// outputEl.addEventListener("click", deleteHTML)

// Chortlehoort Grid Puzzle
const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })
  
  
        const targets = document.querySelectorAll(".target")
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()
  
            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")
  
            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
          }
        })
      }
    }
  })
  
  DragDropManager.init()