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

let userXP = document.getElementById("userXP");

let levelTitle = document.getElementById("levelTitle");

let levelProgress = document.getElementById("levelProgress");
// ===============================
// Animated Counter
// ===============================

function animateCounter(element, target){

    let start = 0;

    let duration = 700;

    let increment = target / (duration / 16);

    let timer = setInterval(function(){

        start += increment;

        if(start >= target){

            start = target;

            clearInterval(timer);

        }

        element.textContent = Math.floor(start);

    },16);

}

// ===============================
// Update Dashboard
// ===============================

function updateInsights() {

    let stats = loadStats();
    // --------------------------
// XP & Level
// --------------------------

animateCounter(userXP, stats.xp);

setTimeout(function(){

    userXP.textContent = stats.xp + " XP";

},700);

levelProgress.textContent =
    "XP : " + stats.xp + " / 100";

if(stats.level == 1){

    levelTitle.textContent = "🌱 Beginner";

}
else if(stats.level == 2){

    levelTitle.textContent = "🚀 Intermediate";

}
else if(stats.level == 3){

    levelTitle.textContent = "🔥 Advanced";

}
else if(stats.level == 4){

    levelTitle.textContent = "💎 Expert";

}
else{

    levelTitle.textContent =
        "👑 Master (Level " + stats.level + ")";

}

    // --------------------------
    // Counts
    // --------------------------

    // --------------------------
// Counts (Animated)
// --------------------------

let plannerCount = 0;

if (typeof planner !== "undefined") {

    plannerCount = planner.length;

}

animateCounter(insightNotes, notes.length);

animateCounter(insightFocus, stats.focus);

animateCounter(insightPomodoro, stats.pomodoro);

animateCounter(insightPlans, plannerCount);
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

    animateCounter(insightPercent, percentage);

setTimeout(function(){

    insightPercent.textContent = percentage + "%";

},700);

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

    animateCounter(goalPercent, goal);

setTimeout(function(){

    goalPercent.textContent = goal + "%";

},700);

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
if (typeof updateAnalytics === "function") {

    updateAnalytics();

}