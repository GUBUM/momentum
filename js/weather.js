const API_KEY ="3dd3e7ff268ec8bfdeec7fe0a2ab2687";
let weatherIcon = { 
    '01' : 'fas fa-sun', 
    '02' : 'fas fa-cloud-sun', 
    '03' : 'fas fa-cloud', 
    '04' : 'fas fa-cloud-meatball', 
    '09' : 'fas fa-cloud-sun-rain', 
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake', 
    '50' : 'fas fa-smog' 
};
// https://openweathermap.org/    openweather API

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        const icon = document.querySelector("#weather img");
        
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        // `${weatherIcon[(data.weather[0].icon).substr(0,2)]}`
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}\n${data.main.temp} °C`; 
    });
}
function onGeoError(){
    alert("Can't finfd you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);