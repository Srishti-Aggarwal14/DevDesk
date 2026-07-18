// ===============================
// Analytics Dashboard
// ===============================

let avgFocus = document.getElementById("avgFocus");
let completedTasks = document.getElementById("completedTasks");
let pendingTasks = document.getElementById("pendingTasks");
let bestDay = document.getElementById("bestDay");
let streakCount = document.getElementById("streakCount");
let totalTasks = document.getElementById("totalTasks");

function updateAnalytics() {

    if (!avgFocus) return;

    let completed = 0;
    let pending = 0;

    if (typeof tasks !== "undefined") {

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].completed) {

                completed++;

            } else {

                pending++;

            }

        }

    }

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

    totalTasks.textContent = completed + pending;

    avgFocus.textContent = stats.pomodoro * 25 + " min";

    let streak = loadStreak();

    streakCount.textContent = streak.current;

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    bestDay.textContent = days[new Date().getDay()];

}
updateAnalytics();