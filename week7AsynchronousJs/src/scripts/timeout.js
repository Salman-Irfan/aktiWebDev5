console.log(`js file attached inhtml head`)
console.log(`line 1`)
console.log(`line 2`)

const someId = document.getElementById(`someId`)
console.log(someId)
const mainContent = document.getElementById(`mainContent`)
setTimeout(() => {
    mainContent.style.display = 'none'
    someId.innerHTML= `
        <div>
            <h1>bht mufta lga lia, premier subscription join kro</h1>
        </div>
    `
}, 3000);




console.log(`line 4`)
console.log(`line 5`)