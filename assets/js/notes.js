// ===============================
// DevDesk
// notes.js
// Handles Notes CRUD
// ===============================


// -------------------------------
// Add Note
// -------------------------------

function addNote() {

    let note = noteInput.value.trim();

    if (note === "") {

        alert("Please enter a note.");
        noteInput.focus();
        return;

    }

    if (notes.includes(note)) {

        alert("This note already exists.");
        noteInput.focus();
        return;

    }

    if (notes.length >= 5) {

        alert("Maximum 5 notes allowed.");
        noteInput.focus();
        return;

    }

    notes.push(note);

    saveNotes();

    displayNotes();

    noteInput.value = "";

    noteInput.focus();

}


// -------------------------------
// Display Notes
// -------------------------------

function displayNotes() {

    notesList.innerHTML = "";

    if (notes.length === 0) {

        let li = document.createElement("li");

        li.classList.add("empty-message");

        li.textContent = "No notes yet.";

        notesList.appendChild(li);

        return;

    }

    for (let i = 0; i < notes.length; i++) {

        let li = document.createElement("li");

        li.classList.add("note-item");


        let noteText = document.createElement("span");

        noteText.textContent = "📝 " + notes[i];


        let actions = document.createElement("div");

        actions.classList.add("actions");


        // ==========================
        // Edit Button
        // ==========================

        let editBtn = document.createElement("button");

        editBtn.textContent = "✏️";

        editBtn.classList.add("edit-btn");

        editBtn.dataset.index = i;


        editBtn.addEventListener("click", function () {

            let index = Number(editBtn.dataset.index);

            let updatedNote = prompt(
                "Edit your note:",
                notes[index]
            );

            if (updatedNote === null) {

                return;

            }

            updatedNote = updatedNote.trim();

            if (updatedNote === "") {

                alert("Note cannot be empty.");
                return;

            }

            if (
                updatedNote !== notes[index] &&
                notes.includes(updatedNote)
            ) {

                alert("This note already exists.");
                return;

            }

            notes[index] = updatedNote;

            saveNotes();

            displayNotes();

        });


        // ==========================
        // Delete Button
        // ==========================

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "❌";

        deleteBtn.classList.add("delete-btn");

        deleteBtn.dataset.index = i;


        deleteBtn.addEventListener("click", function () {

            let index = Number(deleteBtn.dataset.index);

            let confirmDelete = confirm(
                "Are you sure you want to delete this note?"
            );

            if (!confirmDelete) {

                return;

            }

            notes.splice(index, 1);

            saveNotes();

            displayNotes();

        });


        actions.appendChild(editBtn);

        actions.appendChild(deleteBtn);

        li.appendChild(noteText);

        li.appendChild(actions);

        notesList.appendChild(li);

    }

}


// -------------------------------
// Enter Key Support
// -------------------------------

noteInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addNote();

    }

});


// -------------------------------
// Add Button
// -------------------------------

addNoteBtn.addEventListener("click", addNote);
