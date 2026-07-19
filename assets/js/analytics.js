// ===============================
// Analytics Dashboard
// ===============================


// -------------------------------
// DOM Elements
// -------------------------------

let avgFocus = document.getElementById("avgFocus");

let completedTasks =
document.getElementById("completedTasks");

let pendingTasks =
document.getElementById("pendingTasks");

let bestDay =
document.getElementById("bestDay");

let bestDayScore =
document.getElementById("bestDayScore");

let streakCount =
document.getElementById("streakCount");

let totalTasks =
document.getElementById("totalTasks");



let productivityRating =
document.getElementById("productivityRating");

let completionPercent =
document.getElementById("completionPercent");

let completionBar =
document.getElementById("completionBar");




// ===============================
// Daily Analytics System
// ===============================


function updateDailyAnalytics(){


    let today =
    new Date().toDateString();



    let analytics =
    loadDailyAnalytics();



    let total = 0;

    let completed = 0;



    if(typeof tasks !== "undefined"){


        total = tasks.length;



        for(let task of tasks){


            if(task.completed){

                completed++;

            }

        }

    }



   // ===============================
// Productivity Calculation
// ===============================

let completionScore = 0;

if(total > 0){

    completionScore =
    (completed / total) * 100;

}

let pomodoroScore =
Math.min(
    loadStats().pomodoro * 10,
    100
);

let productivity = Math.round(

    completionScore * 0.6 +

    pomodoroScore * 0.4

);



    analytics[today]={


        tasks: total,


        completed: completed,


        pomodoro:
        loadStats().pomodoro,


        productivity:
        productivity


    };



    saveDailyAnalytics(analytics);


}





// ===============================
// Main Analytics Update
// ===============================


function updateAnalytics(){


    if(!avgFocus) return;



    let completed = 0;

    let pending = 0;



    if(typeof tasks !== "undefined"){


        for(let task of tasks){


            if(task.completed){

                completed++;

            }

            else{

                pending++;

            }


        }


    }



    completedTasks.textContent =
    completed;



    pendingTasks.textContent =
    pending;



    totalTasks.textContent =
    completed + pending;



    avgFocus.textContent =

    loadStats().pomodoro * 25

    + " min";
    // ===========================
// Completion Percentage
// ===========================

let total = completed + pending;

let percent = 0;

if(total > 0){

    percent = Math.round(
        (completed / total) * 100
    );

}

if(completionPercent){

    completionPercent.textContent =
    percent + "%";

}

if(completionBar){

    completionBar.style.width =
    percent + "%";

}




    let streak =
    loadStreak();



    streakCount.textContent =
    streak.current;




    // ===========================
    // REAL BEST PRODUCTIVITY DAY
    // ===========================


    let daily =
    loadDailyAnalytics();



    let best =
    "No Data";


    let max = 0;



    for(let day in daily){



        if(
            daily[day].productivity > max
        ){

            max =
            daily[day].productivity;


            best = day;

        }


    }



    if(bestDay){

    if(max > 0){

        let date = new Date(best);

        bestDay.textContent =
        date.toLocaleDateString(
            "en-IN",
            {
                weekday:"long"
            }
        );

        if(bestDayScore){

            bestDayScore.textContent =
            max + "% Productivity";

        }

        let stars =
        document.getElementById("bestDayStars");

        if(stars){

            if(max >= 90){

                stars.textContent = "⭐⭐⭐⭐⭐";

            }

            else if(max >= 75){

                stars.textContent = "⭐⭐⭐⭐☆";

            }

            else if(max >= 60){

                stars.textContent = "⭐⭐⭐☆☆";

            }

            else if(max >= 40){

                stars.textContent = "⭐⭐☆☆☆";

            }

            else{

                stars.textContent = "⭐☆☆☆☆";

            }

        }

    }

    else{

        bestDay.textContent = "--";

        if(bestDayScore){

            bestDayScore.textContent = "No Data";

        }

        let stars =
        document.getElementById("bestDayStars");

        if(stars){

            stars.textContent = "☆☆☆☆☆";

        }

    }

}







    // ===========================
    // Productivity Rating
    // ===========================


    let score =
    loadStats().xp;



    let rating = "";



    if(score >= 500){

        rating="🏆 A+";

    }

    else if(score >=300){

        rating="⭐ A";

    }

    else if(score >=150){

        rating="📈 B";

    }

    else{

        rating="🚀 Beginner";

    }



    if(productivityRating){

        productivityRating.textContent =
        rating;

    }



}





// ===============================
// Monthly Heatmap
// ===============================


let heatmapGrid =
document.getElementById("heatmapGrid");



function generateHeatmap(){


    if(!heatmapGrid) return;



    let months=[

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];



    let heatmapTitle =
    document.getElementById(
        "heatmapTitle"
    );



    if(heatmapTitle){


        heatmapTitle.textContent =

        "🔥 "

        + months[new Date().getMonth()]

        + " "

        + new Date().getFullYear()

        + " Activity";


    }





    heatmapGrid.innerHTML="";



    let heatmap =
    loadHeatmap();



    let today =
    new Date();



    let todayDate =
    today.getDate();



    let currentMonth =
    today.getMonth()+1;



    let currentYear =
    today.getFullYear();




    let daysInMonth =
    new Date(

        currentYear,

        currentMonth,

        0

    ).getDate();




    let firstDay =
    new Date(

        currentYear,

        currentMonth-1,

        1

    ).getDay();



    firstDay =
    (firstDay+6)%7;




    for(let i=0;i<firstDay;i++){


        let empty =
        document.createElement("div");


        heatmapGrid.appendChild(empty);


    }





    for(let i=1;i<=daysInMonth;i++){


        let box =
        document.createElement("div");



        let key =

        currentYear

        + "-"

        + currentMonth

        + "-"

        + i;




        let activity =
heatmap[key] || 0;

let level = 0;

if(activity >= 1 && activity <= 2){

    level = 1;

}

else if(activity >= 3 && activity <= 5){

    level = 2;

}

else if(activity >= 6){

    level = 3;

}

box.className = "day-box";

box.textContent = i;

box.title =

i +

" " +

months[currentMonth-1] +

"\n" +

activity +

" productive actions";

if(i === todayDate){

    box.classList.add("today-box");

}

if(level > 0){

    box.classList.add("day" + level);

}



        heatmapGrid.appendChild(box);



    }



}// ===============================
// Update Heatmap
// ===============================


function updateHeatmap(){


    let heatmap =
    loadHeatmap();



    let today =
    new Date();



    let key =

    today.getFullYear()

    + "-"

    + (today.getMonth()+1)

    + "-"

    + today.getDate();




    if(!heatmap[key]){

        heatmap[key]=0;

    }



    heatmap[key]++;



    saveHeatmap(heatmap);



    generateHeatmap();


}




// ===============================
// Task Distribution Chart
// ===============================


let pieChart;



function updateTaskPieChart(){


    let completed=0;

    let pending=0;



    if(typeof tasks !== "undefined"){



        for(let task of tasks){



            if(task.completed){

                completed++;

            }

            else{

                pending++;

            }


        }


    }




    let ctx =
    document.getElementById(
        "taskPieChart"
    );



    if(!ctx) return;




    if(pieChart){

        pieChart.destroy();

    }





    pieChart =
    new Chart(ctx,{

        type:"doughnut",



        data:{


            labels:[

                "Completed",

                "Pending"

            ],



            datasets:[{


                data:[

                    completed,

                    pending

                ],



                backgroundColor:[

                    "#22c55e",

                    "#ef4444"

                ],



                borderColor:[

                    "#ffffff",

                    "#ffffff"

                ],



                borderWidth:3,


                hoverOffset:15



            }]


        },



        options:{


            responsive:true,

            maintainAspectRatio:false,



            cutout:"65%",



            plugins:{



                legend:{


                    position:"bottom",



                    labels:{


                        padding:20,


                        font:{


                            size:14,

                            weight:"bold"


                        }


                    }



                }



            }


        }



    });


}

// ===============================
// Priority Distribution Chart
// ===============================

let priorityChart;

function updatePriorityChart(){

    let high=0;

    let medium=0;

    let low=0;


    if(typeof tasks!=="undefined"){

        for(let task of tasks){

            if(task.priority==="High"){

                high++;

            }

            else if(task.priority==="Medium"){

                medium++;

            }

            else{

                low++;

            }

        }

    }


    let ctx=
    document.getElementById(
        "priorityPieChart"
    );

    if(!ctx) return;


    if(priorityChart){

        priorityChart.destroy();

    }


    priorityChart=
    new Chart(ctx,{

        type:"doughnut",

        data:{

            labels:[

                "High",

                "Medium",

                "Low"

            ],

            datasets:[{

                data:[

                    high,

                    medium,

                    low

                ],

                backgroundColor:[

                    "#ef4444",

                    "#f59e0b",

                    "#22c55e"

                ],

                borderWidth:3,

                borderColor:"#fff",

                hoverOffset:18

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            cutout:"65%",

            plugins:{

                legend:{

                    position:"bottom",

                    labels:{

                        padding:20,

                        font:{

                            size:14,

                            weight:"bold"

                        }

                    }

                }

            }

        }

    });

}





// ===============================
// REAL WEEKLY PRODUCTIVITY CHART
// ===============================


let trendChart;



function updateTrendChart(){



    let ctx =
    document.getElementById(
        "weeklyTrendChart"
    );



    if(!ctx) return;




    let analytics =
    loadDailyAnalytics();




    let weeklyData=[];

    let labels=[];



    for(let i=6;i>=0;i--){



        let date =
        new Date();



        date.setDate(
            date.getDate()-i
        );



        let key =
        date.toDateString();




        labels.push(

            date.toLocaleDateString(

                "en-IN",

                {

                    weekday:"short"

                }

            )

        );




        if(analytics[key]){


            weeklyData.push(

                analytics[key].productivity

            );


        }

        else{


            weeklyData.push(0);


        }


    }







    if(trendChart){

        trendChart.destroy();

    }





    trendChart =
    new Chart(ctx,{


        type:"line",




        data:{


            labels:labels,



            datasets:[{


                label:"Productivity",



                data:weeklyData,



                borderColor:"#2563eb",



                borderWidth:4,



                pointRadius:6,



                pointHoverRadius:9,



                pointBackgroundColor:"#ffffff",



                pointBorderColor:"#2563eb",



                pointBorderWidth:3,



                fill:true,



                tension:.45,



                backgroundColor:
                "rgba(37,99,235,.15)"



            }]


        },




        options:{


            responsive:true,


            maintainAspectRatio:false,



            animation:{


                duration:1500,


                easing:"easeOutQuart"


            },



            plugins:{


                legend:{


                    display:false


                }



            },



            scales:{



                x:{


                    grid:{


                        display:false


                    }


                },



                y:{


                    beginAtZero:true,


                    max:100,


                    ticks:{


                        callback:function(value){


                            return value+"%";


                        }


                    }


                }



            }




        }



    });



}
// ===============================
// Last 7 Days Summary
// ===============================

function renderLast7Days(){

    let container =
    document.getElementById("last7DaysCards");

    if(!container) return;

    let analytics =
    loadDailyAnalytics();

    let totalTasks = 0;

    let totalFocus = 0;

    let totalProductivity = 0;

    let days = 0;

    for(let key in analytics){

        totalTasks += analytics[key].completed;

        totalFocus += analytics[key].pomodoro * 25;

        totalProductivity += analytics[key].productivity;

        days++;

    }

    let avg = 0;

    if(days > 0){

        avg = Math.round(
            totalProductivity / days
        );

    }

    let streak = loadStreak();

    container.innerHTML = `

<div class="history-card">

    <h3>✅ ${totalTasks}</h3>

    <p>Tasks Completed</p>

</div>

<div class="history-card">

    <h3>🍅 ${Math.floor(totalFocus/60)}h ${totalFocus%60}m</h3>

    <p>Focus Time</p>

</div>

<div class="history-card">

    <h3>📈 ${avg}%</h3>

    <p>Avg Productivity</p>

</div>

<div class="history-card">

    <h3>🔥 ${streak.current}</h3>

    <p>Day Streak</p>

</div>

`;

}
// ===============================
// Last 7 Days Cards
// ===============================

// function renderLast7Days(){

//     let container =
//     document.getElementById(
//         "last7DaysCards"
//     );

//     if(!container) return;

//     container.innerHTML="";

//     let analytics =
//     loadDailyAnalytics();

//     for(let i=6;i>=0;i--){

//         let date=new Date();

//         date.setDate(
//             date.getDate()-i
//         );

//         let key=date.toDateString();

//         let data=analytics[key];

//         let card=document.createElement("div");

//         card.className="history-card";

//         if(data){

//             card.innerHTML=`

//                 <h3>${
//                 date.toLocaleDateString(
//                 "en-IN",
//                 {weekday:"long"}
//                 )
//                 }</h3>

//                 <p>📝 Tasks : ${data.tasks}</p>

//                 <p>✅ Completed : ${data.completed}</p>

//                 <p>🍅 Pomodoro : ${data.pomodoro}</p>

//                 <p class="score">
//                 ${data.productivity}%
//                 </p>

//             `;

//         }

//         else{

//             card.innerHTML=`

//                 <h3>${
//                 date.toLocaleDateString(
//                 "en-IN",
//                 {weekday:"long"}
//                 )
//                 }</h3>

//                 <p>No Activity</p>

//             `;

//         }

//         container.appendChild(card);

//     }

// }
// ===============================
// Achievement Timeline
// ===============================

function renderAchievements(){

    let container =
    document.getElementById("achievementTimeline");

    if(!container) return;

    let stats = loadStats();

    let streak = loadStreak();

    let completed = 0;

    if(typeof tasks !== "undefined"){

        for(let task of tasks){

            if(task.completed){

                completed++;

            }

        }

    }

    let achievements = [

        {
            icon:"⭐",
            title:"Level 2",
            unlocked:stats.level >= 2
        },

        {
            icon:"🍅",
            title:"10 Pomodoros",
            unlocked:stats.pomodoro >= 10
        },

        {
            icon:"✅",
            title:"25 Tasks",
            unlocked:completed >= 25
        },

        {
            icon:"🔥",
            title:"7 Day Streak",
            unlocked:streak.current >= 7
        },

        {
            icon:"👑",
            title:"1000 XP",
            unlocked:stats.xp >= 1000
        }

    ];

    container.innerHTML="";

    achievements.forEach(function(item){

        let card=document.createElement("div");

        card.className="achievement-item";

        if(!item.unlocked){

            card.classList.add("locked");

        }

        card.innerHTML=`

            <h3>${item.icon}</h3>

            <p>${item.title}</p>

            <strong>

            ${item.unlocked ? "Unlocked ✅" : "Locked 🔒"}

            </strong>

        `;

        container.appendChild(card);

    });

}
// ===============================
// Monthly Productivity Report
// ===============================

function renderMonthlyReport(){

    let container =
    document.getElementById(
        "monthlyReport"
    );

    if(!container) return;

    let analytics =
    loadDailyAnalytics();

    let stats =
    loadStats();

    let completed = 0;

    let productivity = 0;

    let days = 0;

    for(let day in analytics){

        completed +=
        analytics[day].completed;

        productivity +=
        analytics[day].productivity;

        days++;

    }

    let average = 0;

    if(days>0){

        average = Math.round(

            productivity/days

        );

    }

    let focus =
    stats.pomodoro*25;

    let hours =
    Math.floor(focus/60);

    let minutes =
    focus%60;

    container.innerHTML=

    `

    <div class="report-card">

        <h3>📝 ${completed}</h3>

        <p>Tasks Completed</p>

    </div>

    <div class="report-card">

        <h3>🍅 ${stats.pomodoro}</h3>

        <p>Pomodoro Sessions</p>

    </div>

    <div class="report-card">

        <h3>⏳ ${hours}h ${minutes}m</h3>

        <p>Focus Time</p>

    </div>

    <div class="report-card">

        <h3>📈 ${average}%</h3>

        <p>Average Productivity</p>

    </div>

    `;

}
// ===============================
// Overall Productivity Score
// ===============================

function updateOverallScore(){

    let scoreElement =
    document.getElementById("overallScore");

    let remark =
    document.getElementById("overallRemark");

    if(!scoreElement) return;

    let stats = loadStats();

    let streak = loadStreak();

    let completed = 0;

    let total = 0;

    if(typeof tasks !== "undefined"){

        total = tasks.length;

        for(let task of tasks){

            if(task.completed){

                completed++;

            }

        }

    }

    // Task Score (40%)

    let taskScore = 0;

    if(total>0){

        taskScore = (completed/total)*40;

    }

    // Pomodoro Score (20%)

    let pomodoroScore =
    Math.min(stats.pomodoro*2,20);

    // Streak Score (20%)

    let streakScore =
    Math.min(streak.current*2,20);

    // XP Score (20%)

    let xpScore =
    Math.min(stats.level*4,20);

    let finalScore = Math.round(

        taskScore +

        pomodoroScore +

        streakScore +

        xpScore

    );

    scoreElement.textContent =
    finalScore + "%";

    if(finalScore>=90){

        remark.textContent =
        "🏆 Outstanding Productivity";

    }

    else if(finalScore>=75){

        remark.textContent =
        "🚀 Excellent Progress";

    }

    else if(finalScore>=60){

        remark.textContent =
        "💪 Keep Going";

    }

    else if(finalScore>=40){

        remark.textContent =
        "📈 Improving Everyday";

    }

    else{

        remark.textContent =
        "🌱 Getting Started";

    }

}





// ===============================
// Initial Calls
// ===============================


updateDailyAnalytics();

updateAnalytics();

generateHeatmap();

updateTaskPieChart();

updateTrendChart();

updatePriorityChart();

renderLast7Days();

renderAchievements();

renderMonthlyReport();

updateOverallScore();