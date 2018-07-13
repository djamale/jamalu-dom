console.log("===Manipulation Text");

const title = document.getElementById("title")
//console.log("title", titleElement);

const output = document.getElementById("output-paragraph")

const getNames = () => {
    const textFirst = document.getElementById("text-first").value
    const textSecond = document.getElementById("text-second").value

    output.innerText = `
    First Name = ${textFirst}
    Last Name = ${textSecond}
    `

}