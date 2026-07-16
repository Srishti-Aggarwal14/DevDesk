// ===============================
// Weather Widget
// ===============================

// DOM Elements

let cityName = document.getElementById("cityName");
let temperature = document.getElementById("temperature");
let weatherCondition = document.getElementById("weatherCondition");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");

// ===============================
// Get Weather Description
// ===============================

function getWeatherDescription(code) {

    if (code === 0) return "☀️ Clear Sky";
    if (code <= 3) return "⛅ Partly Cloudy";
    if (code <= 48) return "🌫 Fog";
    if (code <= 67) return "🌧 Rain";
    if (code <= 77) return "❄ Snow";
    if (code <= 82) return "🌦 Showers";
    if (code <= 99) return "⛈ Thunderstorm";

    return "Weather";

}

// ===============================
// Fetch Weather
// ===============================

async function getWeather(latitude, longitude) {

    try {

        weatherCondition.textContent = "Loading...";

        let url =
            "https://api.open-meteo.com/v1/forecast?" +
            "latitude=" + latitude +
            "&longitude=" + longitude +
            "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code";

        let response = await fetch(url);

        let data = await response.json();

        temperature.textContent =
            data.current.temperature_2m + "°C";

        humidity.textContent =
            data.current.relative_humidity_2m;

        windSpeed.textContent =
            data.current.wind_speed_10m;

        weatherCondition.textContent =
            getWeatherDescription(data.current.weather_code);

    }

    catch (error) {

        weatherCondition.textContent =
            "Unable to fetch weather.";

        console.log(error);

    }

}

// ===============================
// Get Current Location
// ===============================

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                cityName.textContent = "Your Location";

                getWeather(
                    position.coords.latitude,
                    position.coords.longitude
                );

            },

            function() {

                cityName.textContent = "Chandigarh";

                getWeather(30.7333, 76.7794);

            }

        );

    }

    else {

        cityName.textContent = "Chandigarh";

        getWeather(30.7333, 76.7794);

    }

}

// ===============================
// Auto Refresh Every 10 Minutes
// ===============================

getLocation();

setInterval(getLocation, 600000);