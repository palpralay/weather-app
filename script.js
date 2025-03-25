// Initialize Vanilla Tilt on the card element
VanillaTilt.init(document.querySelector(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.05,
    gyroscope: true
});

// Optional: Add gyroscope support
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function() {
        // This will trigger the gyroscope functionality
    });
}
/*---------------------------------------------------------------------------------------------------*/ 
const apiKey = "13a1cc637feb19f780c70e1660bc8233";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kolkata";
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();