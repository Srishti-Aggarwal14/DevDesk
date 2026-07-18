// ===============================
// AI Productivity Coach
// ===============================

let aiTip = document.getElementById("aiTip");
let aiSchedule = document.getElementById("aiSchedule");

function generateAITip(){

    let stats = loadStats();

    let pending = 0;

    if(typeof tasks !== "undefined"){

        for(let task of tasks){

            if(!task.completed){

                pending++;

            }

        }

    }

    // ===============================
    // Productivity Score
    // ===============================

    let score = 100;

    score -= pending * 5;

    score -= Math.max(0,2-notes.length)*10;

    if(stats.pomodoro===0){

        score-=15;

    }

    if(stats.focus===0){

        score-=10;

    }

    if(score<0){

        score=0;

    }

    // ===============================
    // Productivity Rating
    // ===============================

    let rating="😴 Needs Improvement";

    if(score>=90){

        rating="🔥 Excellent";

    }

    else if(score>=75){

        rating="🚀 Very Good";

    }

    else if(score>=60){

        rating="🙂 Good";

    }

    // ===============================
    // AI Confidence
    // ===============================

    let confidence=90+Math.floor(Math.random()*8);

    // ===============================
    // Build Message
    // ===============================

    let message="";

    message+="👋 Hello <b>"+userName+"</b>!<br><br>";

    message+="📊 <b>Today's Productivity</b><br><br>";

    message+="⭐ <b>Productivity Score : "
        +score+
        "/100</b><br><br>";

    message+="📈 <b>Rating : </b>"
        +rating+
        "<br><br>";

    message+="📝 Notes : "
        +notes.length+
        "<br>";

    message+="📋 Pending Tasks : "
        +pending+
        "<br>";

    message+="🍅 Pomodoros : "
        +stats.pomodoro+
        "<br>";

    message+="⭐ XP : "
        +stats.xp+
        "<br>";

    message+="🏆 Level : "
        +stats.level+
        "<br><br>";

    // ===============================
    // AI Recommendation
    // ===============================

    message+="🤖 <b>AI Recommendation</b><br>";

    if(pending>=8){

        message+="🚨 Today avoid adding new tasks.<br>";

        message+="Finish existing work first.<br>";

        message+="Avoid multitasking.";

    }

    else if(stats.pomodoro===0){

        message+="🍅 Start one Pomodoro before deep work.<br>";

        message+="Then continue with your highest priority task.";

    }

    else if(notes.length===0){

        message+="📝 Write quick notes after each completed task.";

    }

    else if(stats.focus===0){

        message+="🎯 Update Today's Focus before starting work.";

    }

    else{

        message+="🚀 You're doing great today.<br>";

        message+="Keep maintaining this consistency.";

    }

    message+="<br><br>";

    message+="🧠 <b>AI Confidence : "
        +confidence+
        "%</b>";

    aiTip.innerHTML=message;

}



// ===============================
// AI Smart Schedule
// ===============================

let scheduleMode = 0;

function generateSchedule(){

    if(!aiSchedule) return;

    let html = "";

    let currentHour = 9;

    let taskCounter = 0;

    let pendingTasks = [];

    if(typeof tasks !== "undefined"){

        for(let task of tasks){

            if(!task.completed){

                pendingTasks.push({...task});

            }

        }

    }

    // ===========================
    // AI Planning Modes
    // ===========================

    let modeTitle = "";

    switch(scheduleMode){

        // High Priority First
        case 0:

            modeTitle = "🔥 High Priority First";

            pendingTasks.sort(function(a,b){

                let order={

                    "High":1,
                    "Medium":2,
                    "Low":3

                };

                return order[a.priority]-order[b.priority];

            });

            break;

        // Due Date First
        case 1:

            modeTitle = "📅 Deadline First";

            pendingTasks.sort(function(a,b){

                return new Date(a.dueDate)-new Date(b.dueDate);

            });

            break;

        // Quick Wins
        case 2:

            modeTitle = "⚡ Quick Wins";

            pendingTasks.sort(function(a,b){

                return a.title.length-b.title.length;

            });

            break;

        // Deep Work
        case 3:

            modeTitle = "🍅 Deep Work Mode";

            pendingTasks.sort(function(a,b){

                let order={

                    "High":1,
                    "Medium":2,
                    "Low":3

                };

                return order[a.priority]-order[b.priority];

            });

            pendingTasks.reverse();

            break;

    }

    html += `<h3 style="margin-bottom:18px;">${modeTitle}</h3>`;

    for(let task of pendingTasks){

        let dueText="";

        if(task.dueDate){

            let today=new Date();

            let due=new Date(task.dueDate);

            today.setHours(0,0,0,0);

            due.setHours(0,0,0,0);

            let diff=(due-today)/(1000*60*60*24);

            if(diff==0){

                dueText="⚠️ Due Today";

            }

            else if(diff==1){

                dueText="📅 Due Tomorrow";

            }

            else if(diff<0){

    dueText=
    "🚨 Overdue by "
    +Math.abs(diff)+
    " day(s)";

}

        }

        let icon="🟢";

let border="#22c55e";

if(task.priority==="High"){

    icon="🔥";

    border="#ef4444";

}

else if(task.priority==="Medium"){

    icon="🟡";

    border="#f59e0b";

}

        html+=`

        <div class="schedule-item"
style="border-left:6px solid ${border}">

            <b>🕘 ${currentHour}:00 – ${currentHour}:30</b><br>

            ${icon} ${task.title}<br>

            <small>${dueText}</small>

        </div>

        `;

        currentHour++;

        taskCounter++;

        if(taskCounter%2===0){

            html+=`

            <div class="schedule-item">

                <b>🕘 ${currentHour}:00 – ${currentHour}:25</b><br>

                🍅 Pomodoro Session

            </div>

            `;

            html+=`

            <div class="schedule-item">

                <b>🕘 ${currentHour}:25 – ${currentHour}:40</b><br>

                ☕ Short Break

            </div>

            `;

            currentHour++;

        }

    }

    html+=`

    <div class="schedule-item">

        <b>🕘 ${currentHour}:00 – ${currentHour}:20</b><br>

        📝 Notes Revision

    </div>

    `;

    currentHour++;

    html+=`

    <div class="schedule-item">

        <b>🕘 ${currentHour}:20 – ${currentHour}:50</b><br>

        🎯 Review Today's Focus

    </div>

    `;

    currentHour++;

    html+=`

    <div class="schedule-item">

        <b>🕘 ${currentHour}:50 – ${currentHour+1}:00</b><br>

        💧 Hydration & Stretch Break

    </div>

    `;

    aiSchedule.innerHTML = html;

}



// ===============================
// Initial Load
// ===============================

generateAITip();

generateSchedule();
let generateScheduleBtn =
document.getElementById("generateScheduleBtn");

if(generateScheduleBtn){

    generateScheduleBtn.addEventListener("click",function(){

        scheduleMode++;

        if(scheduleMode>3){

            scheduleMode=0;

        }

        showToast("🤖 AI generated a new schedule!");

        generateSchedule();

    });

}