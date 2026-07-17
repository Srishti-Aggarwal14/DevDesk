// ===============================
// Daily Streak
// ===============================

let streak = loadStreak();

let currentStreak =
document.getElementById("currentStreak");

let bestStreak =
document.getElementById("bestStreak");

let lastOpened =
document.getElementById("lastOpened");

function updateStreak(){

    let today = new Date();

    let last = new Date(streak.last);

    let diff = Math.floor(
        (today-last)/(1000*60*60*24)
    );

    if(diff===1){

        streak.current++;

    }

    else if(diff>1){

        streak.current=1;

    }

    if(streak.current>streak.best){

        streak.best=streak.current;

    }

    streak.last=today.toDateString();

    saveStreak(streak);

    currentStreak.textContent=streak.current;

    bestStreak.textContent=streak.best;

    lastOpened.textContent=streak.last;

}

updateStreak();