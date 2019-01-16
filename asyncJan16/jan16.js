const element = (...args) => {
    return `<${args[0]} class = "${args[1]}">${args[2]}</${args[0]}>`
}

const student = (name, sectionContent, info, pf) => {
    return `
        <div id="student">
            ${element("h1", `xx-large ${pf}`, name)}
            ${element("section", "gold", sectionContent)}
            ${element("aside", "pushRight", info)}
        </div>
    `
}

for (currentStudent of students) {
    let studentComponent = ""
    if (currentStudent.score >= 60) {
        studentComponent = student(
            currentStudent.name,
            currentStudent.class,
            currentStudent.info,
            "passing")
    } else {
        studentComponent = student(
            currentStudent.name,
            currentStudent.class,
            currentStudent.info,
            "failing")
    }
    document.querySelector("#container").innerHTML += studentComponent
 }











//  const student = (name, sectionContent, info, pf) => {
//     return `
//         <div id="student">
//             ${h1(name, `xx-large ${pf}`)}
//             ${section(sectionContent, "gold")}
//             ${aside(info, "pushRight")}
//         </div>
//     `
//  }

// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
// }

// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }



// const student = (name, sectionContent, info, pf) => {
//      return `
//         <div id="student">
//             ${h1(name, `xx-large ${pf}`)}
//             ${section(sectionContent, "gold")}
//             ${aside(info, "pushRight")}
//         </div>
//         `
// }


 
//  students.forEach(currentStudent => {
//          const studentHTMLRepresentation = studentPass(
//          currentStudent.name,
//          currentStudent.class,
//          currentStudent.info)
//      document.querySelector("#container").innerHTML += studentHTMLRepresentation
//  })
 
 


