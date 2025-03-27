VanillaTilt.init(document.querySelector(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  scale: 1.05,
  gyroscope: true,
});

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function () {});
}
/*---------------------------------------------------------------------------------------------------*/

const apiKey = "13a1cc637feb19f780c70e1660bc8233";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting input box and button
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch weather data
async function checkWeather(city) {
  try {
    if (!city) {
      alert("Please enter a city name!");
      return;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);

    // Updating UI with weather data
    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Selecting the correct weather icon
    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition.includes("cloud")) {
      weatherIcon.src = "./img/images/clouds.png";
    } else if (weatherCondition.includes("clear")) {
      weatherIcon.src = "./img/images/clear.png";
    } else if (weatherCondition.includes("rain")) {
      weatherIcon.src = "./img/images/rain.png";
    } else if (weatherCondition.includes("drizzle")) {
      weatherIcon.src = "./img/images/drizzle.png";
    } else if (weatherCondition.includes("mist")) {
      weatherIcon.src = "./img/images/mist.png";
    } else if (weatherCondition.includes("haze")) {
      weatherIcon.src = "./img/images/haze.png";
    } else if (weatherCondition.includes("snow")) {
      weatherIcon.src = "./img/images/snow.png";
    } 
  } catch (error) {
    alert("City not found. Please enter a valid city name!");
  }
}

// Event listener for search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});

// Event listener for Enter key in input field
if (searchBox) {
  searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      checkWeather(searchBox.value.trim());
    }
  });
}

