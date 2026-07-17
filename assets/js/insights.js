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

function updateInsights() {

    // Notes

    insightNotes.textContent = notes.length;

    // Focus

    let stats = loadStats();

    insightFocus.textContent = stats.focus;

    // Pomodoro

    insightPomodoro.textContent = stats.pomodoro;

    // Planner

    if (typeof planner !== "undefined") {

        insightPlans.textContent = planner.length;

    }
    else {

        insightPlans.textContent = 0;

    }

    // Overall Score

    let total =
        notes.length +
        stats.focus +
        stats.pomodoro +
        (typeof planner !== "undefined" ? planner.length : 0);

    let percentage = Math.min(
        Math.round((total / 15) * 100),
        100
    );

    insightPercent.textContent = percentage + "%";

    insightProgress.style.width = percentage + "%";

    // Colors

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

updateInsights();
