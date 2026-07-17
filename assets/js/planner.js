// ===============================
// Daily Planner
// ===============================

let planner = [];

loadPlanner();

// -------------------------------
// DOM Elements
// -------------------------------

let plannerTime = document.getElementById("plannerTime");
let plannerTask = document.getElementById("plannerTask");
let addPlannerBtn = document.getElementById("addPlannerBtn");
let plannerList = document.getElementById("plannerList");

// -------------------------------
// Add Plan
// -------------------------------

function addPlan() {

    let time = plannerTime.value;
    let task = plannerTask.value.trim();

    if (time === "" || task === "") {
        alert("Please enter time and task.");
        return;
    }

    planner.push({
        time: time,
        task: task,
        completed: false
    });

    planner.sort(function (a, b) {
        return a.time.localeCompare(b.time);
    });

    savePlanner();
    displayPlanner();

    // Update Dashboard
    if (typeof updateInsights === "function") {
        updateInsights();
    }
    if(typeof renderBadges==="function"){

renderBadges();

}
if(typeof updateChart==="function"){

    updateChart();

}

    plannerTime.value = "";
    plannerTask.value = "";
}

// -------------------------------
// Display Planner
// -------------------------------

function displayPlanner() {

    plannerList.innerHTML = "";

    if (planner.length === 0) {

        let li = document.createElement("li");
        li.textContent = "No plans added.";
        plannerList.appendChild(li);

        if (typeof updateInsights === "function") {
            updateInsights();
        }
        if(typeof renderBadges==="function"){

renderBadges();

}
if(typeof updateChart==="function"){

    updateChart();

}

        return;
    }

    for (let i = 0; i < planner.length; i++) {

        let li = document.createElement("li");

        if (planner[i].completed) {
            li.classList.add("completed");
        }

        let text = document.createElement("div");

        text.innerHTML =
            "<strong>" +
            planner[i].time +
            "</strong><br>" +
            planner[i].task;

        let buttons = document.createElement("div");
        buttons.className = "planner-buttons";

        // -----------------------
        // Complete Button
        // -----------------------

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";

        completeBtn.addEventListener("click", function () {

            planner[i].completed = !planner[i].completed;

            savePlanner();
            displayPlanner();

            if (typeof updateInsights === "function") {
                updateInsights();
            }
            if(typeof renderBadges==="function"){

renderBadges();

}
if(typeof updateChart==="function"){

    updateChart();

}

        });

        // -----------------------
        // Delete Button
        // -----------------------

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";

        deleteBtn.addEventListener("click", function () {

            if (confirm("Delete this plan?")) {

                planner.splice(i, 1);

                savePlanner();
                displayPlanner();

                if (typeof updateInsights === "function") {
                    updateInsights();
                }
                if(typeof renderBadges==="function"){

renderBadges();

}
if(typeof updateChart==="function"){

    updateChart();

}
            }

        });

        buttons.appendChild(completeBtn);
        buttons.appendChild(deleteBtn);

        li.appendChild(text);
        li.appendChild(buttons);

        plannerList.appendChild(li);
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
}

// -------------------------------
// Initial Display
// -------------------------------

displayPlanner();

// -------------------------------
// Events
// -------------------------------

addPlannerBtn.addEventListener("click", addPlan);

plannerTask.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addPlan();
    }

});