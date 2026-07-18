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





// -------------------------------
// Add Task
// -------------------------------

function addTask() {

    let task = taskInput.value.trim();

    let priority = document.getElementById("priority").value;

    let dueDate = document.getElementById("dueDate").value;

    if (task === "") {

        showToast("⚠ Please enter a task.");

        return;

    }

    tasks.push({

        title: task,

        priority: priority,

        dueDate: dueDate,

        completed: false

    });

    saveTasks();
    showToast("✅ Task Added");

displayTasks();

if (typeof updateInsights === "function") {
    updateInsights();
}

taskInput.value = "";

taskInput.focus();

}
// ===============================
// Update Analytics
// ===============================



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

    // XP sirf jab task pehli baar complete ho
    if (!tasks[index].completed) {

        addXP(20);

    }

    tasks[index].completed = !tasks[index].completed;
    showToast("🎉 Task Completed");

    saveTasks();

    displayTasks();

    if (typeof updateInsights === "function") {
        updateInsights();
    }

});

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "🗑";

        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {

            if (confirm("Delete this task?")) {

                let index = tasks.indexOf(task);

                tasks.splice(index, 1);
                showToast("🗑 Task Deleted");

                saveTasks();

                displayTasks();

                if (typeof updateInsights === "function") {
    updateInsights();
}

            }

        });

        buttons.appendChild(completeBtn);

        buttons.appendChild(deleteBtn);

        li.appendChild(text);

        li.appendChild(buttons);

        taskList.appendChild(li);

    }
    

}

// -------------------------------
// Initial Display
// -------------------------------

displayTasks();

if (typeof updateInsights === "function") {
    updateInsights();
}

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