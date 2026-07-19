// ===============================
// STORAGE FUNCTIONS
// ===============================


// ---------- USER ----------

function saveUser() {

    localStorage.setItem(
        "userName",
        userName
    );

}


function loadUser() {

    let storedUser =
    localStorage.getItem("userName");


    if(storedUser !== null){

        userName = storedUser;

    }

}


// ---------- FOCUS ----------

function saveFocus(){

    localStorage.setItem(
        "todaysFocus",
        todaysFocus
    );

}


function loadFocus(){

    let storedFocus =
    localStorage.getItem("todaysFocus");


    if(storedFocus !== null){

        todaysFocus = storedFocus;

    }

}


// ---------- NOTES ----------

function saveNotes(){

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}


function loadNotes(){

    let storedNotes =
    localStorage.getItem("notes");


    if(storedNotes !== null){

        notes = JSON.parse(storedNotes);

    }

}


// ---------- THEME ----------

function saveTheme(theme){

    localStorage.setItem(
        "theme",
        theme
    );

}


function loadTheme(){

    return localStorage.getItem("theme");

}



// ===============================
// Dashboard Storage
// ===============================


function saveStats(stats){

    localStorage.setItem(
        "devdeskStats",
        JSON.stringify(stats)
    );

}



function loadStats(){

    let data =
    localStorage.getItem("devdeskStats");


    if(data){

        let stats =
        JSON.parse(data);



        // Backward Compatibility

        if(stats.notes === undefined)
            stats.notes = 0;


        if(stats.focus === undefined)
            stats.focus = 0;


        if(stats.pomodoro === undefined)
            stats.pomodoro = 0;


        if(stats.xp === undefined)
            stats.xp = 0;


        if(stats.level === undefined)
            stats.level = 1;



        return stats;

    }



    return {

        notes:0,

        focus:0,

        pomodoro:0,

        xp:0,

        level:1

    };

}



// ===============================
// Task Storage
// ===============================


function saveTasks(){

    localStorage.setItem(
        "devdeskTasks",
        JSON.stringify(tasks)
    );

}



function loadTasks(){

    let storedTasks =
    localStorage.getItem("devdeskTasks");


    if(storedTasks){

        tasks =
        JSON.parse(storedTasks);

    }

    else{

        tasks=[];

    }

}



// ===============================
// Planner Storage
// ===============================


function savePlanner(){

    localStorage.setItem(
        "planner",
        JSON.stringify(planner)
    );

}



function loadPlanner(){

    let data =
    localStorage.getItem("planner");


    if(data){

        planner =
        JSON.parse(data);

    }

    else{

        planner=[];

    }

}



// ===============================
// Streak Storage
// ===============================


function saveStreak(streak){

    localStorage.setItem(
        "devdeskStreak",
        JSON.stringify(streak)
    );

}



function loadStreak(){

    let data =
    localStorage.getItem("devdeskStreak");


    if(data){

        return JSON.parse(data);

    }



    return {

        current:1,

        best:1,

        lastOpened:
        new Date().toDateString()

    };

}



// ===============================
// Weekly Chart Storage
// ===============================


function saveWeeklyData(data){

    localStorage.setItem(
        "weeklyProductivity",
        JSON.stringify(data)
    );

}



function loadWeeklyData(){

    let data =
    localStorage.getItem("weeklyProductivity");


    if(data){

        return JSON.parse(data);

    }


    return [
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];

}



// ===============================
// XP System
// ===============================


function addXP(points){

    let stats =
    loadStats();


    stats.xp += points;



    while(stats.xp >= 100){


        stats.xp -=100;


        stats.level++;



        showToast(
            "🎉 Level Up! Welcome to Level "
            + stats.level
        );



        if(typeof confetti==="function"){

            confetti({

    particleCount:150,

    spread:90,

    origin:{y:0.6}

});

        }


    }



    saveStats(stats);

}



// ===============================
// Heatmap Data
// ===============================


function loadHeatmap(){

    return JSON.parse(

        localStorage.getItem(
            "devdeskHeatmap"
        )

    ) || {};

}



function saveHeatmap(data){

    localStorage.setItem(

        "devdeskHeatmap",

        JSON.stringify(data)

    );

}



// =================================================
// NEW: Daily Analytics Storage
// =================================================


function saveDailyAnalytics(data){


    localStorage.setItem(

        "devdeskDailyAnalytics",

        JSON.stringify(data)

    );


}



function loadDailyAnalytics(){


    let data =

    localStorage.getItem(
        "devdeskDailyAnalytics"
    );



    if(data){

        return JSON.parse(data);

    }



    return {};

}