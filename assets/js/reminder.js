function resetPlannerNotifications(){

    let today = new Date().toDateString();

    let lastReset =
        localStorage.getItem("plannerLastReset");

    if(lastReset !== today){

        for(let i=0;i<planner.length;i++){

            planner[i].notified = false;

            if(planner[i].completed === undefined){
                planner[i].completed = false;
            }

        }

        savePlanner();

        localStorage.setItem(
            "plannerLastReset",
            today
        );

    }

}
// ===============================
// Planner Reminder System
// ===============================

function checkPlannerReminder() {
    resetPlannerNotifications();

    if (typeof planner === "undefined") return;

    let now = new Date();

    let currentTime =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

    for (let i = 0; i < planner.length; i++) {

        if (
            planner[i].time === currentTime &&
            !planner[i].notified
        ) {

            showNotification(
                "📅 Planner Reminder",
                planner[i].task
            );

            showToast("📅 " + planner[i].task);

            planner[i].notified = true;

            savePlanner();

        }

    }

}
resetPlannerNotifications();

checkPlannerReminder();

setInterval(checkPlannerReminder,30000);