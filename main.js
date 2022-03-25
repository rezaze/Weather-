const AddSubmit = document.getElementById("add");
const TextCity = document.getElementById("city");
const Cityoutput = document.getElementById("cityoutput");
const Desoutput = document.getElementById("description");
const Tempoutput = document.getElementById("temp");
const Windoutput = document.getElementById("wind");

const ApiKey = "71cda9e666c58803b338b40281c70665";

var convertToCel = (value) => (value - 273).toFixed(2);


async function GetWeather() {

    var weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${TextCity.value}&appid=${ApiKey}`)).json();
    setInfo(weatherResult);
}

function setInfo(data) {

    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    Cityoutput.innerHTML = `City : ${cityName}`;
    Desoutput.innerHTML = `Description : ${description}`;
    Tempoutput.innerHTML = `temprature : ${convertToCel(temp)}C`;
    Windoutput.innerHTML = `Wind Speed : ${wind}`;
}

AddSubmit.addEventListener("click", GetWeather);