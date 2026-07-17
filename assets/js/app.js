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


// ===============================
// Pomodoro Variables
// ===============================

let timer;

let totalSeconds = 25 *60;

let isRunning = false;


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

let timerDisplay = document.getElementById("timerDisplay");

let startTimerBtn = document.getElementById("startTimer");

let pauseTimerBtn = document.getElementById("pauseTimer");

let resetTimerBtn = document.getElementById("resetTimer");

let motivation = document.getElementById("motivation");
// ===============================
// Dashboard Elements
// ===============================

let notesCount = document.getElementById("notesCount");

let focusCount = document.getElementById("focusCount");

let pomodoroCount = document.getElementById("pomodoroCount");

/*let dashboardProgressFill =
    document.getElementById("progressFill");

let dashboardProgressText =
    document.getElementById("progressText");*/

let stats = loadStats();
// ===============================
// Productivity Insights
// ===============================



// const morningQuotes = [

//     "💡 Have a productive day ahead!",

//     "☀️ Every small step counts.",

//     "🚀 Start strong and stay consistent.",

//     "📚 Today's effort is tomorrow's success."

// ];

// const afternoonQuotes = [

//     "💻 Keep going, you're doing great!",

//     "🌤️ Stay focused on your goals.",

//     "⚡ Progress is better than perfection.",

//     "🎯 One task at a time."

// ];

// const eveningQuotes = [

//     "🌇 Finish today's goals with confidence.",

//     "📖 Review what you've learned today.",

//     "🏆 Success comes from consistency.",

//     "✨ End the day with satisfaction."

// ];

// const nightQuotes = [

//     "🌙 Rest well. Tomorrow is another opportunity.",

//     "😴 Recharge yourself for tomorrow.",

//     "💤 A fresh mind learns faster.",

//     "⭐ Great work today!"
// ];
// function setMotivationalQuote(quotes, period) {

//     if (currentGreetingPeriod !== period) {

//         currentGreetingPeriod = period;

//         let randomIndex = Math.floor(Math.random() * quotes.length);

//         selectedQuote = quotes[randomIndex];

//     }

//     motivation.textContent = selectedQuote;

// }


// -------------------------------
// Greeting
// -------------------------------

function greetUser() {

    let currentHour = new Date().getHours();

    let greeting = "";
    let emoji = "";

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
        emoji = "🌸";
    }
    else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good Afternoon";
        emoji = "🌤️";
    }
    else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Good Evening";
        emoji = "🌇";
    }
    else {
        greeting = "Good Night";
        emoji = "🌙";
    }

    heading.textContent = `${emoji} ${greeting}, ${userName}`;

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

    if (heading) {
    greetUser();
}

}
// ===============================
// Timer Display
// ===============================

function updateTimerDisplay() {

    let minutes = Math.floor(totalSeconds / 60);

    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (totalSeconds > 600) {

        timerDisplay.style.color = "#2563eb";

    }

    else if (totalSeconds > 300) {

        timerDisplay.style.color = "#f59e0b";

    }

    else {

        timerDisplay.style.color = "#ef4444";

    }

    // console.log(totalSeconds);
    // console.log(timerDisplay.style.color);

}
// ===============================
// Dashboard
// ===============================

function updateDashboard() {

    // notesCount.textContent = stats.notes;

    // focusCount.textContent = stats.focus;

    // pomodoroCount.textContent = stats.pomodoro;

    /*updateProgress();

    updateInsights();*/

    saveStats(stats);

}
/*function updateProgress() {

    let completed = stats.notes + stats.focus + stats.pomodoro;

    let max = 15;

    let percentage = Math.min(
        Math.round((completed / max) * 100),
        100
    );

    dashboardProgressFill.style.width = percentage + "%";

    dashboardProgressText.textContent = percentage + "%";

}*/

// ===============================
// Start Timer
// ===============================

// ===============================
// Start Timer
// ===============================

function startPomodoro() {

    if (isRunning) return;

    isRunning = true;

    startTimerBtn.disabled = true;
    pauseTimerBtn.disabled = false;
    resetTimerBtn.disabled = false;

    timer = setInterval(function () {

        totalSeconds--;

        updateTimerDisplay();

        if (totalSeconds <= 0) {

            clearInterval(timer);

            isRunning = false;

            timerDisplay.textContent = "✅ Completed";

            stats.pomodoro++;

updateDashboard();
if (typeof updateInsights === "function") {
    updateInsights();
}
if(typeof renderBadges==="function"){

renderBadges();

}
if(typeof updateChart==="function"){

    updateChart();

}

            startTimerBtn.disabled = false;
            pauseTimerBtn.disabled = true;
            resetTimerBtn.disabled = true;

            setTimeout(function () {

                alert("🎉 Pomodoro Completed!");

                totalSeconds = 25 * 60; 

                updateTimerDisplay();

            }, 2000);

        }

    }, 1000);

} //  <-- THIS WAS MISSING

// ===============================
// Pause Timer
// ===============================

// ===============================
// Pause Timer
// ===============================
function pausePomodoro() {

    clearInterval(timer);

    isRunning = false;

    startTimerBtn.disabled = false;

    pauseTimerBtn.disabled = true;

}



// ===============================
// Reset Timer
// ===============================

function resetPomodoro() {

    clearInterval(timer);

    isRunning = false;

    
    totalSeconds = 25 * 60;

    updateTimerDisplay();

    startTimerBtn.disabled = false;
    pauseTimerBtn.disabled = true;
    resetTimerBtn.disabled = true;

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

updateDateTime();

updateTimerDisplay();

updateDashboard();
if (typeof loadQuote === "function") {
    loadQuote();
}
pauseTimerBtn.disabled = true;

resetTimerBtn.disabled = true;
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

//updateBtn.addEventListener("click", updateFocus);

//addNoteBtn.addEventListener("click", addNote);

//themeBtn.addEventListener("click", toggleTheme);

// startTimerBtn.addEventListener("click",startPomodoro);

// pauseTimerBtn.addEventListener("click",pausePomodoro);

// resetTimerBtn.addEventListener("click",resetPomodoro);

themeBtn.addEventListener("click", toggleTheme);

startTimerBtn.addEventListener("click", startPomodoro);

pauseTimerBtn.addEventListener("click", pausePomodoro);

resetTimerBtn.addEventListener("click", resetPomodoro);