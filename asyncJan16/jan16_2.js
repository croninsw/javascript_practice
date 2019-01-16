const fragment = document.createDocumentFragment()

const section1 =  document.createElement("section")
section1.className = "message"
section1.textContent = "Hey!"
fragment.appendChild(section1)

const section2 =  document.createElement("section")
section2.className = "message"
section2.textContent = "Oh, hey there."
fragment.appendChild(section2)

const section3 =  document.createElement("section")
section3.className = "message"
section3.textContent = "How's your dog?"
fragment.appendChild(section3)

const section4 =  document.createElement("section")
section4.className = "message"
section4.textContent = "He's fine! Thanks for asking. How is your goat?"
fragment.appendChild(section4)

const section5 =  document.createElement("section")
section5.className = "message"
section5.textContent = "What goat?"
fragment.appendChild(section5)

document.querySelector("#messages").appendChild(fragment)
























