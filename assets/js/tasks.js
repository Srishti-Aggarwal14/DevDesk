// ===============================
// Task Manager
// ===============================

let tasks = [];

loadTasks();

// -------------------------------
// DOM Elements
// -------------------------------

let taskInput = document.getElementById("taskInput");

let addTaskBtn = document.getElementById("addTaskBtn");

let taskList = document.getElementById("taskList");

let searchTask = document.getElementById("searchTask");

let sortTasks = document.getElementById("sortTasks");

let currentFilter = "all";

let allTasksBtn = document.getElementById("allTasksBtn");

let pendingBtn = document.getElementById("pendingBtn");

let completedBtn = document.getElementById("completedBtn");
// ===============================
// Analytics Elements
// ===============================

let totalTasks = document.getElementById("totalTasks");

let completedTasks = document.getElementById("completedTasks");

let pendingTasks = document.getElementById("pendingTasks");

let completionRate = document.getElementById("completionRate");

let progressFill = document.getElementById("progressFill");

// -------------------------------
// Add Task
// -------------------------------

function addTask() {

    let task = taskInput.value.trim();

    let priority = document.getElementById("priority").value;

    let dueDate = document.getElementById("dueDate").value;

    if (task === "") {

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        title: task,

        priority: priority,

        dueDate: dueDate,

        completed: false

    });

    saveTasks();

    displayTasks();

    taskInput.value = "";

    taskInput.focus();

}
// ===============================
// Update Analytics
// ===============================

function updateAnalytics() {

    let total = tasks.length;

    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed) {

            completed++;

        }

    }

    let pending = total - completed;

    let percentage = 0;

    if (total > 0) {

        percentage = Math.round((completed / total) * 100);

    }

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

    completionRate.textContent = percentage + "%";

    progressFill.style.width = percentage + "%";

    // Change progress bar color

    if (percentage < 40) {

        progressFill.style.background = "#ef4444";

    }

    else if (percentage < 80) {

        progressFill.style.background = "#f59e0b";

    }

    else {

        progressFill.style.background = "#22c55e";

    }

}

// -------------------------------
// Display Tasks
// -------------------------------

function displayTasks() {

    let displayArray = [...tasks];

    // -------------------------------
    // Sorting
    // -------------------------------

    if (sortTasks.value === "priority") {

        const order = {

            High: 1,
            Medium: 2,
            Low: 3

        };

        displayArray.sort(function (a, b) {

            return order[a.priority] - order[b.priority];

        });

    }

    else if (sortTasks.value === "date") {

        displayArray.sort(function (a, b) {

            if (a.dueDate === "") return 1;

            if (b.dueDate === "") return -1;

            return new Date(a.dueDate) - new Date(b.dueDate);

        });

    }

    else if (sortTasks.value === "az") {

        displayArray.sort(function (a, b) {

            return a.title.localeCompare(b.title);

        });

    }

    taskList.innerHTML = "";

    if (tasks.length === 0) {

    let li = document.createElement("li");

    li.textContent = "No tasks added.";

    taskList.appendChild(li);

    updateAnalytics();

    return;

}

    // -------------------------------
    // Display
    // -------------------------------

    for (let i = 0; i < displayArray.length; i++) {

        let task = displayArray[i];

        // Search

        let keyword = searchTask.value.toLowerCase();

        if (!task.title.toLowerCase().includes(keyword)) {

            continue;

        }

        // Filter

        if (currentFilter === "pending" && task.completed) {

            continue;

        }

        if (currentFilter === "completed" && !task.completed) {

            continue;

        }

        let li = document.createElement("li");

        if (task.completed) {

            li.classList.add("completed");

        }

        // -------------------------------
        // Task Info
        // -------------------------------

        let text = document.createElement("div");

        text.className = "task-info";

        let title = document.createElement("strong");

        title.textContent = task.title;

        let details = document.createElement("small");

        details.textContent =
            "Priority: " +
            task.priority +
            " | Due: " +
            (task.dueDate || "No Date");

        if (task.priority === "High") {

            details.className = "priority-high";

        }

        else if (task.priority === "Medium") {

            details.className = "priority-medium";

        }

        else {

            details.className = "priority-low";

        }

        text.appendChild(title);

        text.appendChild(details);

        // -------------------------------
        // Buttons
        // -------------------------------

        let buttons = document.createElement("div");

        buttons.className = "task-buttons";

        let completeBtn = document.createElement("button");

        completeBtn.textContent = "✔";

        completeBtn.className = "complete-btn";

        completeBtn.addEventListener("click", function () {

            let index = tasks.indexOf(task);

            tasks[index].completed = !tasks[index].completed;

            saveTasks();

            displayTasks();

        });

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "🗑";

        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {

            if (confirm("Delete this task?")) {

                let index = tasks.indexOf(task);

                tasks.splice(index, 1);

                saveTasks();

                displayTasks();

            }

        });

        buttons.appendChild(completeBtn);

        buttons.appendChild(deleteBtn);

        li.appendChild(text);

        li.appendChild(buttons);

        taskList.appendChild(li);

    }
    updateAnalytics();

}

// -------------------------------
// Initial Display
// -------------------------------

displayTasks();

// -------------------------------
// Event Listeners
// -------------------------------

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});

allTasksBtn.addEventListener("click", function () {

    currentFilter = "all";

    displayTasks();

});

pendingBtn.addEventListener("click", function () {

    currentFilter = "pending";

    displayTasks();

});

completedBtn.addEventListener("click", function () {

    currentFilter = "completed";

    displayTasks();

});

searchTask.addEventListener("keyup", function () {

    displayTasks();

});

sortTasks.addEventListener("change", function () {

    displayTasks();

});