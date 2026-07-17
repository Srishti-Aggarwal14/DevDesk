// ===============================
// Productivity Dashboard
// ===============================

let insightNotes = document.getElementById("insightNotes");
let insightFocus = document.getElementById("insightFocus");
let insightPomodoro = document.getElementById("insightPomodoro");
let insightPlans = document.getElementById("insightPlans");

let insightPercent = document.getElementById("insightPercent");
let insightProgress = document.getElementById("insightProgress");

let productivityStatus = document.getElementById("productivityStatus");
let motivationLine = document.getElementById("motivationLine");

let goalPercent = document.getElementById("goalPercent");
let userLevel = document.getElementById("userLevel");

// ===============================
// Update Dashboard
// ===============================

function updateInsights() {

    let stats = loadStats();

    // --------------------------
    // Counts
    // --------------------------

    insightNotes.textContent = notes.length;

    insightFocus.textContent = stats.focus;

    insightPomodoro.textContent = stats.pomodoro;

    let plannerCount = 0;

    if (typeof planner !== "undefined") {

        plannerCount = planner.length;

    }

    insightPlans.textContent = plannerCount;

    // --------------------------
    // Productivity %
    // --------------------------

    let totalScore =
        notes.length +
        stats.focus +
        stats.pomodoro +
        plannerCount;

    let percentage = Math.min(
        Math.round((totalScore / 15) * 100),
        100
    );

    insightPercent.textContent = percentage + "%";

    insightProgress.style.width = percentage + "%";

    // --------------------------
    // Goal Completion
    // --------------------------

    let taskCount = 0;
    let completedTasks = 0;

    if (typeof tasks !== "undefined") {

        taskCount = tasks.length;

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].completed) {

                completedTasks++;

            }

        }

    }

    let totalGoals =
        taskCount +
        plannerCount +
        1;

    let completedGoals =
        completedTasks +
        stats.pomodoro +
        (stats.focus > 0 ? 1 : 0);

    let goal = 0;

    if (totalGoals > 0) {

        goal = Math.round(
            (completedGoals / totalGoals) * 100
        );

    }

    goal = Math.min(goal, 100);

    goalPercent.textContent = goal + "%";

    // --------------------------
    // Productivity Level
    // --------------------------

    let level = "";

    if (percentage >= 90) {

        level = "👑 DevDesk Master";

    }

    else if (percentage >= 75) {

        level = "🔥 Deep Worker";

    }

    else if (percentage >= 60) {

        level = "🚀 Productive";

    }

    else if (percentage >= 40) {

        level = "⚡ Consistent";

    }

    else {

        level = "🌱 Beginner";

    }

    userLevel.textContent = level;

    // --------------------------
    // Status
    // --------------------------

    if (percentage >= 80) {

        insightProgress.style.background = "#22c55e";

        productivityStatus.textContent =
            "🔥 Excellent Productivity";

        motivationLine.textContent =
            "🚀 You're on fire today!";

    }

    else if (percentage >= 60) {

        insightProgress.style.background = "#3b82f6";

        productivityStatus.textContent =
            "👍 Good Productivity";

        motivationLine.textContent =
            "🌱 Small progress every day.";

    }

    else if (percentage >= 40) {

        insightProgress.style.background = "#f59e0b";

        productivityStatus.textContent =
            "🙂 Average Productivity";

        motivationLine.textContent =
            "💪 Keep going!";

    }

    else {

        insightProgress.style.background = "#ef4444";

        productivityStatus.textContent =
            "💪 Let's get productive!";

        motivationLine.textContent =
            "🚀 Keep Building!";

    }

}

// ===============================
// Initial Load
// ===============================

updateInsights();