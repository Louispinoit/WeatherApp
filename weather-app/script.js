const apikey = "4f0c5f237b428cfe861db9dc06e5875a";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeather(location) {
  const resp = await fetch(url(location), {
    origin: "cors",
  });
  const respData = await resp.json();
  addWeatherToPage(respData);
  console.log(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/></h2>
        <small>${data.weather[0].main}</small>
        
    `;

  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  if (location) {
    getWeather(location);
  }
});
