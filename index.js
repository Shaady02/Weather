const apikey = "040f94460bad439e964b1b3d37e3515b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".searchpart input");
const searchbtn = document.querySelector(".searchpart button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector("weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "weather-app-img/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "weather-app-img/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "weather-app-img/images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "weather-app-img/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "weather-app-img/images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchbox.addEventListener("keydown" , (e)=>{
    if(e.key=="Enter")
        checkweather(searchbox.value);
})

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})
