
const apikey = "878bfbd4489b9e1c676af2429a489d55";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
const response = await fetch(apiurl + city + `&appid=${apikey}`);

if(response.status == 404){
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";

}
var data = await response.json();


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.main.humidity + "km/h";


if(data.weather[0].main == "clouds"){
  weatherIcon.src ="png/clouds.png";
}
else if(data.weather[0].main == "clear"){
  weatherIcon.src = "png/clear.png";
}
else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "png/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "png/brizzle.png";
}
else if(data.weather[0].main == "mist"){
  weatherIcon.src = ".img/mist.jpj";
}

document.querySelector(".weather").computedStyleMap.display = "block";

document.querySelector(".error").style.display = "none  ";
}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})