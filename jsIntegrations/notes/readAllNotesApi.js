console.log(`all notes`);

const displayNotes = document.getElementById("displayNotes");
console.log(displayNotes);

const readAllNotes = async () => {
    const readAllNotesResponse = await axios.get(`http://127.0.0.1:8000/api/v1/all-notes`);
    console.log(readAllNotesResponse);
    if (readAllNotesResponse.data.message === `Notes retrieved successfully`) {
        const extractedNotes = readAllNotesResponse.data.notes;
        console.log(extractedNotes);

        // Clear existing content in displayNotes
        displayNotes.innerHTML = "";

        // Create a table element
        const table = document.createElement("table");

        // Create table headers
        const headers = ["ID", "Title", "Description", "Actions"];
        const headerRow = document.createElement("tr");
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Create table rows for each note using map function
        extractedNotes.forEach(note => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${note.id}</td>
                <td>${note.title}</td>
                <td>${note.description}</td>
                <td> <button id=${note.id} >Delete</button> </td>
                `;
            table.appendChild(tr);
        });

        // Append the table to the displayNotes div
        displayNotes.appendChild(table);
    }
};

readAllNotes();
