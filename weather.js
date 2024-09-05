const temp=document.querySelector('.temp');
const cityname = document.querySelector('.city-name');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const searchbar = document.getElementById('searchbox');
const btn = document.querySelector('.search button');
const weatherimg = document.getElementById('weather-icon');

    

async function checkweather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=beeafd91660d18575d3b5af694355328`);
    const data = await response.json();
    console.log(data);


    temp.innerHTML=(data.main.temp-273.15).toFixed(2)+"°C";
    cityname.innerHTML=data.name;
    wind.innerHTML=data.wind.speed+"km/h";
    humidity.innerHTML = data.main.humidity+"%";

    if(data.weather[0].main =="Clouds"){
        weatherimg.src ="clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherimg.src ="clear.png";
    }
    else if (data.weather[0].main =="Mist"){
        weatherimg.src="mist.png";
    }
    else if (data.weather[0].main =="Drizzle"){
        weatherimg.src = "drizzle.png"
    }
    else if (data.weather[0].main =="Rain"){
        weatherimg.src = "rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherimg.src="snow.png";
}
}

// checkweather();

btn.addEventListener("click",()=>{
    
    const city =searchbar.value
    

    checkweather(city)
})


    
