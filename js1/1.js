// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.




const firstSection = document.querySelector(".article__header");
// console.log(firstSection);
firstSection.textContent = "Welcome to the Sam Cronin blog";

 const allSections = document.querySelectorAll(".article__header");

for (let i = 0; i < allSections.length; i++) {
    const addHeaders = allSections[i];
    addHeaders.classList.add('important');
}

const dashedElement = document.querySelector('.dashed');
// console.log(dashedElement);
dashedElement.classList.remove('dashed');

const classColor = document.querySelector('.article__footer');
classColor.classList.add('goldenrod');

