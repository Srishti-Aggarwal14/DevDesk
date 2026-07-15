// ===============================
// STORAGE FUNCTIONS
// ===============================


// ---------- USER ----------

function saveUser() {

    localStorage.setItem("userName", userName);

}

function loadUser() {

    let storedUser = localStorage.getItem("userName");

    if (storedUser !== null) {

        userName = storedUser;

    }

}


// ---------- FOCUS ----------

function saveFocus() {

    localStorage.setItem("todaysFocus", todaysFocus);

}

function loadFocus() {

    let storedFocus = localStorage.getItem("todaysFocus");

    if (storedFocus !== null) {

        todaysFocus = storedFocus;

    }

}


// ---------- NOTES ----------

function saveNotes() {

    localStorage.setItem("notes", JSON.stringify(notes));

}

function loadNotes() {

    let storedNotes = localStorage.getItem("notes");

    if (storedNotes !== null) {

        notes = JSON.parse(storedNotes);

    }

}


// ---------- THEME ----------

function saveTheme(theme) {

    localStorage.setItem("theme", theme);

}

function loadTheme() {

    return localStorage.getItem("theme");

}