console.log(document)
console.log(window)
console.log(document.location)

let jsObject = {
    name: `Umar`,
    age: 19,
    email: `umar@gmail.com`
}

console.log(jsObject)

// document contains all the html 

const paragraphOne = document.getElementById("unique-property")

console.log(paragraphOne)
console.dir(paragraphOne)

console.log(paragraphOne.innerText)

paragraphOne.innerText = `js k hatho wo ho gya change`

// get element by class name

const classSelector = document.getElementsByClassName("yellow-color")
console.log(classSelector)
console.log(classSelector[0])
console.log(classSelector[1])
console.log(classSelector[2])


console.log(`query selector`)
const querySelector = document.querySelector("#unique-property")
console.log(querySelector)

const classQuerySelector = document.querySelector(".yellow-color")
console.log(classQuerySelector)

const allQuerySelector = document.querySelectorAll(".yellow-color")
console.log(allQuerySelector)