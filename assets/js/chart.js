// ===============================
// Weekly Productivity Chart
// ===============================

let weeklyData = loadWeeklyData();

let ctx = document
.getElementById("weeklyChart")
.getContext("2d");

let productivityChart = new Chart(ctx,{

    type:"bar",

    data:{

        labels:[
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets:[{

            label:"Tasks Completed",

            data:weeklyData,

            borderWidth:1,

            borderRadius:8

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{
                display:false
            }

        },

        scales:{

            y:{

                beginAtZero:true

            }

        }

    }

});

function updateChart(){

    let today=new Date().getDay();

    let index=(today+6)%7;

    weeklyData[index]=
        notes.length+
        stats.focus+
        stats.pomodoro+
        planner.length;

    saveWeeklyData(weeklyData);

    productivityChart.data.datasets[0].data=weeklyData;

    productivityChart.update();

}

updateChart();