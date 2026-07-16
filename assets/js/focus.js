// ===============================
// DevDesk
// focus.js
// Handles Today's Focus
// ===============================


// Update the tagline on screen

function updateTagline() {

    tagline.textContent = todaysFocus;

}


// Update Today's Focus

function updateFocus() {

    let newFocus = focusInput.value.trim();

    if (newFocus === "") {

        alert("Please enter today's focus.");

        focusInput.focus();

        return;

    }

    // Update application state

    todaysFocus = `Today's Focus: ${newFocus}`;

    // Save in Local Storage

    saveFocus();

    // Update UI

    updateTagline();
    // Dashboard
stats.focus++;

updateDashboard();

    // Clear Input

    focusInput.value = "";

    // Bring cursor back

    focusInput.focus();

}


// Allow Enter key

focusInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        updateFocus();

    }

});