// https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=b07b6d53afe1476ef9384c8c69b8b75b&units=metric

const ApiKey = "b07b6d53afe1476ef9384c8c69b8b75b";
const ApiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function CheckWeather(city) {
  try {
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

    const data = await response.json();

    if(response.ok){
        document.querySelector(".errorplace").innerHTML="";

    }
    // console.log(data);
    // console.log(city)

    // console.log(data.main.temp)

    // console.log(data.main.humidity )
    // console.log(data.weather[0].main)

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity_level").innerHTML =
      data.main.humidity + `%`;
    document.querySelector(".windspeed").innerHTML = data.wind.speed + `Km/h`;
    let Changeimage = document.querySelector("#weather_img");

    let imgFinder = data.weather[0].main;
    console.log(imgFinder);
    if (imgFinder == "Clouds") {
      Changeimage.src = "images/Clouds.png";
    } else if (imgFinder == "Clear") {
      Changeimage.src = "images/Clear.png";
    } else if (imgFinder == "Drizzle") {
      Changeimage.src = "images/Drizzle.png";
    } else if (imgFinder == "Mist") {
      Changeimage.src = "images/Mist.png";
    } else if (imgFinder == "Rain") {
      Changeimage.src = "images/Rain.png";
    } else if (imgFinder == "Fog") {
      Changeimage.src = "images/Mist.png";
    } else if (imgFinder == "Haze") {
      Changeimage.src = "images/Mist.png";
    } else if (imgFinder == "Snow") {
      Changeimage.src = "images/Snow.png";
    } else {
      Changeimage.src = "images/notfound.jpg";
    }

    document.querySelector(".weather-result").style.display = "block";
    document.querySelector(".humidity-wind").style.display = "flex";
  } 
  
  catch (error) {
    console.log("Error fetching on weather data :", error);

function errorname(){
    document.querySelector(".errorplace").innerHTML="Please Enter the Correct place";
    
    document.querySelector(".weather-result").style.display = "none";
    document.querySelector(".humidity-wind").style.display = "none";
}

    errorname()
  }
}

document.getElementById("search").addEventListener("click", () => {
  let country = document.getElementById("coutry").value;

  CheckWeather(country);
});