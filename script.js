// Ask user's name

let userName = prompt("Welcome to DevDesk!\n\nEnter your name:");

if (userName === null || userName.trim() === "") {
    userName = "Developer";
}

// Application State

let todaysFocus = "Build. Learn. Grow.";

// Select HTML Elements

let heading = document.getElementById("heading");
let tagline = document.getElementById("tagline");
let focusInput = document.getElementById("focusInput");
let updateBtn = document.getElementById("updateBtn");

// Functions

function greetUser() {
    heading.textContent = `Welcome Back, ${userName} 👋`;
}

function updateTagline() {
    tagline.textContent = todaysFocus;
}

function updateFocus() {

    let newFocus = focusInput.value.trim();

    if (newFocus === "") {
        alert("Please enter today's focus.");
        return;
    }

    // Update application state
    todaysFocus = `Today's Focus: ${newFocus}`;

    // Update UI
    updateTagline();

    // Challenge Completed ✅
    focusInput.value = "";

}

// Initial UI

greetUser();
updateTagline();

// Event Listener

updateBtn.addEventListener("click", updateFocus);


