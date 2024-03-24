const noteForm = document.getElementById("noteForm");
const title = document.getElementById("title");
const description = document.getElementById("description");

const handleNoteForm = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const noteFormData = {
        title: title.value,
        description: description.value
    }

    // go to laravel
    const handleLaravelCreateApi = async () => {

        const laravelCreateApiResponse = await axios.post(`http://127.0.0.1:8000/api/v1/notes`, noteFormData)
        // console.log(laravelCreateApiResponse)
        if (laravelCreateApiResponse.data.message === `Note created successfully`) {
            window.location.href = "/notes/note.html"
        }
    }
    handleLaravelCreateApi()
};

noteForm.addEventListener("submit", handleNoteForm);
