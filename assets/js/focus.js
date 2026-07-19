// ===============================
// DevDesk
// focus.js
// Handles Today's Focus
// ===============================

// -------------------------------
// Update Tagline
// -------------------------------

function updateTagline() {

    if (typeof tagline !== "undefined" && tagline) {
        tagline.textContent = todaysFocus;
    }

}

// -------------------------------
// Update Today's Focus
// -------------------------------

function updateFocus() {

    let newFocus = focusInput.value.trim();

    if (newFocus === "") {

        showToast("⚠ Please enter today's focus.");
        focusInput.focus();
        return;

    }

    // Update state
    todaysFocus = "Today's Focus: " + newFocus;

saveFocus();

updateHeatmap();

if(typeof generateAITip==="function"){

    generateAITip();

}

if(typeof generateSchedule==="function"){

    generateSchedule();

}

showToast("🎯 Focus Updated");

updateTagline();

    // -----------------------
    // Stats
    // -----------------------

    stats.focus++;

    saveStats(stats);

    addXP(15);

    updateDashboard();

    if (typeof updateInsights === "function") {
        updateInsights();
    }

    if (typeof renderBadges === "function") {
        renderBadges();
    }

    if (typeof updateChart === "function") {
        updateChart();
    }

    // Clear input
    focusInput.value = "";
    focusInput.focus();

}
// -------------------------------
// Enter Key
// -------------------------------

focusInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        updateFocus();

    }

});
updateTagline();

// -------------------------------
// Events
// -------------------------------

updateBtn.addEventListener("click", updateFocus);

