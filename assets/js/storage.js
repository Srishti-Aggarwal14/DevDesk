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
// ===============================
// Dashboard Storage
// ===============================

function saveStats(stats) {

    localStorage.setItem(
        "devdeskStats",
        JSON.stringify(stats)
    );

}

function loadStats() {

    let stats = localStorage.getItem("devdeskStats");

    if (stats) {

        return JSON.parse(stats);

    }

    return {

        notes: 0,

        focus: 0,

        pomodoro: 0

    };

}
// ===============================
// Task Storage
// ===============================

function saveTasks() {

    localStorage.setItem(
        "devdeskTasks",
        JSON.stringify(tasks)
    );

}

function loadTasks() {

    let storedTasks = localStorage.getItem("devdeskTasks");

    if (storedTasks) {

        tasks = JSON.parse(storedTasks);

    }

    else {

        tasks = [];

    }

}
// ===============================
// Planner Storage
// ===============================

function savePlanner() {

    localStorage.setItem(
        "planner",
        JSON.stringify(planner)
    );

}

function loadPlanner() {

    let data = localStorage.getItem("planner");

    if (data) {

        planner = JSON.parse(data);

    }

    else {

        planner = [];

    }

}