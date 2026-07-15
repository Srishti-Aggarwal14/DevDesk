// ===============================
// DevDesk
// storage.js
// Handles Local Storage
// ===============================


// ---------- Notes ----------

function saveNotes() {

    localStorage.setItem(
        "devdeskNotes",
        JSON.stringify(notes)
    );

}

function loadNotes() {

    let storedNotes = localStorage.getItem("devdeskNotes");

    if (storedNotes !== null) {

        notes = JSON.parse(storedNotes);

    }

}


// ---------- Today's Focus ----------

function saveFocus() {

    localStorage.setItem(
        "devdeskFocus",
        todaysFocus
    );

}

function loadFocus() {

    let storedFocus = localStorage.getItem("devdeskFocus");

    if (storedFocus !== null) {

        todaysFocus = storedFocus;

    }

}


// ---------- Username ----------

function saveUser() {

    localStorage.setItem(
        "devdeskUser",
        userName
    );

}

function loadUser() {

    let storedUser = localStorage.getItem("devdeskUser");

    if (storedUser !== null) {

        userName = storedUser;

    }

}