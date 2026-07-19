// ===============================
// Backup Data
// ===============================

let backupBtn =
document.getElementById("backupBtn");

let restoreBtn =
document.getElementById("restoreBtn");

let restoreInput =
document.getElementById("restoreInput");

if(backupBtn){

    backupBtn.addEventListener("click",backupData);

}

if(restoreBtn){

    restoreBtn.addEventListener("click",function(){

        restoreInput.click();

    });

}

if(restoreInput){

    restoreInput.addEventListener(

        "change",

        restoreData

    );

}
// ===============================
// Backup Data
// ===============================

function backupData(){

    let backup = {

        userName:
        localStorage.getItem("userName"),

        todaysFocus:
        localStorage.getItem("todaysFocus"),

        notes:
        localStorage.getItem("notes"),

        tasks:
        localStorage.getItem("devdeskTasks"),

        planner:
        localStorage.getItem("planner"),

        stats:
        localStorage.getItem("devdeskStats"),

        streak:
        localStorage.getItem("devdeskStreak"),

        heatmap:
        localStorage.getItem("devdeskHeatmap"),

        analytics:
        localStorage.getItem("devdeskDailyAnalytics"),

        theme:
        localStorage.getItem("theme")

    };

    let blob = new Blob(

        [JSON.stringify(backup,null,2)],

        {type:"application/json"}

    );

    let link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "devdesk-backup.json";

    link.click();

    showToast("💾 Backup Downloaded");

}
// ===============================
// Restore Data
// ===============================

function restoreData(event){

    let file = event.target.files[0];

    if(!file) return;

    let reader = new FileReader();

    reader.onload = function(e){

        let backup =
        JSON.parse(e.target.result);

        if(backup.userName)
            localStorage.setItem(
                "userName",
                backup.userName
            );

        if(backup.todaysFocus)
            localStorage.setItem(
                "todaysFocus",
                backup.todaysFocus
            );

        if(backup.notes)
            localStorage.setItem(
                "notes",
                backup.notes
            );

        if(backup.tasks)
            localStorage.setItem(
                "devdeskTasks",
                backup.tasks
            );

        if(backup.planner)
            localStorage.setItem(
                "planner",
                backup.planner
            );

        if(backup.stats)
            localStorage.setItem(
                "devdeskStats",
                backup.stats
            );

        if(backup.streak)
            localStorage.setItem(
                "devdeskStreak",
                backup.streak
            );

        if(backup.heatmap)
            localStorage.setItem(
                "devdeskHeatmap",
                backup.heatmap
            );

        if(backup.analytics)
            localStorage.setItem(
                "devdeskDailyAnalytics",
                backup.analytics
            );

        if(backup.theme)
            localStorage.setItem(
                "theme",
                backup.theme
            );

        showToast("✅ Data Restored Successfully");

        setTimeout(function(){

            location.reload();

        },1000);

    };

    reader.readAsText(file);

}