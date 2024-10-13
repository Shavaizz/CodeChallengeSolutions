const apiKey = "fbfca1cd07aeca933711001cc25d0635";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultLocation = document.querySelector("#location");
const resultTemperature = document.querySelector("#temperature");
const resultDescription = document.querySelector("#description");

searchButton.addEventListener("click", () => {
    const location = searchInput.value;
    searchInput.value = "";
    console.log("Done")
    if(location){
        fetchWeather(location);
    }
})
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            resultLocation.textContent = data.name;
            resultTemperature.textContent = `${Math.round(data.main.temp)}°C`;
            resultDescription.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    }

fetchWeather("Islamabad");