const APIKEY = "3a32aac58e8a9bb355fe670f75d36e84"
const URL = "https://api.openweathermap.org/data/2.5/weather?q="
const search = document.querySelector(".but")
var cities = document.querySelector(".search-bar")

async function fetchweather (city){
    const res = await fetch(`${URL}${city}&units=metric&appid=${APIKEY}`)
    const data = await res.json();
    console.log(data,data.weather,data.main,data.wind);
    document.querySelector(".city").innerHTML="Weather in " + data.name;
    if(data.main.feels_like<15){
        document.querySelector(".icon").src = "https://cdn0.iconfinder.com/data/icons/weather-3/512/snow.png";
    }
    else if(data.main.feels_like>15 && data.main.feels_like<27){
        document.querySelector(".icon").src = "https://th.bing.com/th/id/OIP.ZOA6RJpKC54Xfv3pEijDowHaHa?pid=ImgDet&rs=1";
    }
    else if(data.main.feels_like>27 && data.main.feels_like<35){
        document.querySelector(".icon").src = "https://th.bing.com/th/id/OIP.BSSlYPHH-LhMMtGkL8BGVAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    }
    else if(data.main.feels_like>35){
        document.querySelector(".icon").src = "https://th.bing.com/th/id/OIP.6R3h92ibIwQBRuvjkjS_iAHaHa?pid=ImgDet&rs=1";
    }
    document.querySelector(".description").innerHTML=data.weather[0].description;
    document.querySelector(".temp").innerHTML=data.main.feels_like + "°C";
    document.querySelector(".humidity").innerHTML="Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML="Wind speed: " + data.wind.speed + " km/h";
    console.log(data.main.feels_like)
    console.log(data.name)
    console.log(data.weather[0].description)
    console.log(data.main.humidity)
    console.log(data.wind.speed)
}

search.addEventListener("click",()=>{
    fetchweather(cities.value);
})

// fetchweather('denver')