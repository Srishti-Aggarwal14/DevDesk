// ===============================
// DevDesk
// app.js
// Main Application File
// ===============================


// -------------------------------
// Application State
// -------------------------------

let notes = [];

let todaysFocus = "Build. Learn. Grow.";

let userName = "";


// -------------------------------
// Load Stored Data
// -------------------------------

loadUser();
loadFocus();
loadNotes();


// -------------------------------
// Ask Username (Only First Time)
// -------------------------------

if (userName === "") {

    userName = prompt("Welcome to DevDesk!\n\nEnter your name:");

    if (userName === null || userName.trim() === "") {

        userName = "Developer";

    }

    saveUser();

}


// -------------------------------
// DOM Elements
// -------------------------------

let heading = document.getElementById("heading");

let tagline = document.getElementById("tagline");

let focusInput = document.getElementById("focusInput");

let updateBtn = document.getElementById("updateBtn");

let noteInput = document.getElementById("noteInput");

let addNoteBtn = document.getElementById("addNoteBtn");

let notesList = document.getElementById("notesList");


// -------------------------------
// Greeting
// -------------------------------

function greetUser() {

    heading.textContent =
        `Welcome Back, ${userName} 👋`;

}


// -------------------------------
// Initialization
// -------------------------------

greetUser();

updateTagline();

displayNotes();


// -------------------------------
// Event Listeners
// -------------------------------

updateBtn.addEventListener("click", updateFocus);

addNoteBtn.addEventListener("click", addNote);