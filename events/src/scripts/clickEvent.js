const noteButton = document.getElementById("button")

const titleInput = document.getElementById("title")

const descriptionInput = document.getElementById("description")

console.log(titleInput)
console.log(descriptionInput)

console.log(noteButton)

const handleNoteButton = () => {
    // console.log(`button click ho gya`)
    console.log(titleInput.value)
    console.log(descriptionInput.value)
}

noteButton.addEventListener("click", handleNoteButton)