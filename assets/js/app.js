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
let selectedQuote = "";
let currentGreetingPeriod = "";


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

let currentDate = document.getElementById("currentDate");

let currentTime = document.getElementById("currentTime");

let themeBtn = document.getElementById("themeBtn");

let motivation = document.getElementById("motivation");

const morningQuotes = [

    "💡 Have a productive day ahead!",

    "☀️ Every small step counts.",

    "🚀 Start strong and stay consistent.",

    "📚 Today's effort is tomorrow's success."

];

const afternoonQuotes = [

    "💻 Keep going, you're doing great!",

    "🌤️ Stay focused on your goals.",

    "⚡ Progress is better than perfection.",

    "🎯 One task at a time."

];

const eveningQuotes = [

    "🌇 Finish today's goals with confidence.",

    "📖 Review what you've learned today.",

    "🏆 Success comes from consistency.",

    "✨ End the day with satisfaction."

];

const nightQuotes = [

    "🌙 Rest well. Tomorrow is another opportunity.",

    "😴 Recharge yourself for tomorrow.",

    "💤 A fresh mind learns faster.",

    "⭐ Great work today!"
];
function setMotivationalQuote(quotes, period) {

    if (currentGreetingPeriod !== period) {

        currentGreetingPeriod = period;

        let randomIndex = Math.floor(Math.random() * quotes.length);

        selectedQuote = quotes[randomIndex];

    }

    motivation.textContent = selectedQuote;

}


// -------------------------------
// Greeting
// -------------------------------

function greetUser() {

    let currentHour = new Date().getHours();

    let greeting = "";

let emoji = "";

let quotes = [];

let period = "";

    if (currentHour >= 5 && currentHour < 12) {

        greeting = "Good Morning";
        emoji = "🌸";
        quotes = morningQuotes;
        period="morning";

    }

    else if (currentHour >= 12 && currentHour < 17) {

        greeting = "Good Afternoon";
        emoji = "🌤️";
        quotes = afternoonQuotes;
        period="afternoon";

    }

    else if (currentHour >= 17 && currentHour < 21) {

        greeting = "Good Evening";
        emoji = "🌇";
        quotes = eveningQuotes;
        period="evening";

    }

    else {

        greeting = "Good Night";
        emoji = "🌙";
        quotes = nightQuotes;
        period="night";

    }

    heading.textContent = `${emoji} ${greeting}, ${userName}`;

    setMotivationalQuote(quotes,period);

}


// -------------------------------
// Date & Time
// -------------------------------

function updateDateTime() {

    let now = new Date();

    currentDate.textContent = now.toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    currentTime.textContent = now.toLocaleTimeString("en-IN");

    // BONUS CHALLENGE COMPLETED ✅
    // Greeting updates automatically

    greetUser();

}
function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        saveTheme("dark");

        themeBtn.textContent = "☀️";

    }

    else {

        saveTheme("light");

        themeBtn.textContent = "🌙";

    }

}


// -------------------------------
// Initialization
// -------------------------------

greetUser();

updateTagline();

displayNotes();

updateDateTime();
// -------------------------------
// Load Saved Theme
// -------------------------------

let savedTheme = loadTheme();

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";

}


// -------------------------------
// Live Clock
// -------------------------------

setInterval(updateDateTime, 1000);


// -------------------------------
// Event Listeners
// -------------------------------

updateBtn.addEventListener("click", updateFocus);

addNoteBtn.addEventListener("click", addNote);

themeBtn.addEventListener("click", toggleTheme);