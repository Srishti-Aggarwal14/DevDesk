// ===============================
// Weekly Productivity Chart
// ===============================

let weeklyChartCanvas = document.getElementById("weeklyChart");

let productivityChart = null;

if (weeklyChartCanvas && typeof Chart !== "undefined") {

    let weeklyData = loadWeeklyData();

    let ctx = weeklyChartCanvas.getContext("2d");

    productivityChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{

                label: "Tasks Completed",

                data: weeklyData,

                borderWidth: 1,

                borderRadius: 8,

                backgroundColor: "#2563eb"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

function updateChart() {

    if (!productivityChart) return;

    let weeklyData = loadWeeklyData();

    let today = new Date().getDay();

    let index = (today + 6) % 7;

    weeklyData[index] =

        notes.length +

        stats.focus +

        stats.pomodoro +

        planner.length;

    saveWeeklyData(weeklyData);

    productivityChart.data.datasets[0].data = weeklyData;

    productivityChart.update();

}

updateChart();