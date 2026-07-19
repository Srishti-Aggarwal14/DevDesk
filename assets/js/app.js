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

let totalSeconds = 25 * 60;

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
let loginScreen = document.getElementById("loginScreen");

let dashboard = document.getElementById("dashboard");

let loginName = document.getElementById("loginName");

let continueBtn = document.getElementById("continueBtn");

let guestBtn = document.getElementById("guestBtn");

let rememberUser = document.getElementById("rememberUser");
let logoutBtn=document.getElementById("logoutBtn");
let menuBtn = document.getElementById("menuBtn");
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

    // Hamesha latest stats localStorage se lo
    stats = loadStats();

    saveStats(stats);

}


// ===============================
// Start Timer
// ===============================

function startPomodoro() {

    if (isRunning) return;

    // Load user's Pomodoro setting
    let data =
    localStorage.getItem(
        "devdeskSettings"
    );

    if(data){

        let settings =
        JSON.parse(data);

        totalSeconds =
        settings.pomodoro * 60;

    }
    else{

        totalSeconds =
        25 * 60;

    }

    updateTimerDisplay();

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

saveStats(stats);

addXP(30);

updateDashboard();

updateDailyAnalytics();

updateAnalytics();

updateTrendChart();

renderLast7Days();

updateHeatmap();

// Update Real Daily Analytics

if(typeof updateDailyAnalytics === "function"){

    updateDailyAnalytics();

}

if(typeof generateAITip==="function"){

    generateAITip();

}


if(typeof generateSchedule==="function"){

    generateSchedule();

}

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

    showNotification(
        "🍅 Pomodoro Completed",
        "Great Job! Time for a short break."
    );

    showToast("🍅 Pomodoro Completed!");
    celebrate();

    let totalSeconds = 25 * 60;

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

    
    /*totalSeconds = 25 * 60;*/
    let data =
localStorage.getItem(
    "devdeskSettings"
);

if(data){

    let settings =
    JSON.parse(data);

    totalSeconds =
    settings.pomodoro * 60;

}
else{

    totalSeconds =
    25 * 60;

}

updateTimerDisplay();


    startTimerBtn.disabled = false;
    pauseTimerBtn.disabled = true;
    resetTimerBtn.disabled = true;

}
// ===============================
// LOGIN
// ===============================

function showDashboard(){

    loginScreen.style.display="none";

    dashboard.style.display="block";
    dashboard.style.opacity="0";

setTimeout(function(){

    dashboard.style.opacity="1";

},100);

    greetUser();

}

function showLogin(){

    loginScreen.style.display="flex";

    dashboard.style.display="none";

}
function loginUser(){

    let name = loginName.value.trim();

    if(name===""){
        alert("Please enter your name.");
        return;
    }

    userName = name;

    if(rememberUser.checked){

        saveUser();

    }else{

        localStorage.removeItem("userName");

    }

    showDashboard();
    showNotification(
    "👋 Welcome",
    "Welcome back, " + userName + "!"
);

showToast("Welcome back " + userName + " 👋");

}
function guestLogin(){

    localStorage.removeItem("userName");

    userName="Guest";

    showDashboard();
    showNotification(
        "🚀 Guest Mode",
        "Welcome to DevDesk!"
    );

showToast("Welcome Guest 🚀");

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
function toggleMenu(){

    let nav = document.querySelector(".nav-right");

    nav.classList.toggle("show");

}
// ===============================
// Logout
// ===============================

function logout(){

    let confirmLogout=confirm(
        "Logout from DevDesk?"
    );

    if(!confirmLogout){

        return;

    }

    localStorage.removeItem("userName");

    location.reload();

}


// -------------------------------
// Initialization
// -------------------------------
if(userName===""){

    showLogin();

}
else{

    showDashboard();

}

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



themeBtn.addEventListener("click", toggleTheme);
menuBtn.addEventListener("click",toggleMenu);

startTimerBtn.addEventListener("click", startPomodoro);

pauseTimerBtn.addEventListener("click", pausePomodoro);

resetTimerBtn.addEventListener("click", resetPomodoro);
continueBtn.addEventListener("click",loginUser);

guestBtn.addEventListener("click",guestLogin);

loginName.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        loginUser();

    }

});
logoutBtn.addEventListener("click",logout);

// ===============================
// Toast Notification
// ===============================

function showToast(message){

    let toast=document.getElementById("toast");

    toast.textContent=message;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },2500);

}
function animateButton(button){

    button.classList.add("button-click");

    setTimeout(function(){

        button.classList.remove("button-click");

    },250);

}
let buttons=document.querySelectorAll("button");

buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        animateButton(btn);

    });

});
// ===============================
// Confetti Celebration
// ===============================

function celebrate(){

    if(typeof confetti !== "function") return;

    confetti({

        particleCount:120,

        spread:80,

        origin:{
            y:0.6
        }

    });

}