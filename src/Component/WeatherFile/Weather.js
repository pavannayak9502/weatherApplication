import React from "react";
import "../WeatherFile/Weather.css";
import { useState } from "react";
import axios from "axios";

let Weather=()=>{
    let[search, setSearch]=useState("");  {/* Using it for form input */}
    let [Data, setData]=useState(null); {/* Using it for to fetch the user data in that API */}

    let date = new Date();      {/* To display the present Day */}


    let handleSubmit=(data)=>{ {/* Calling the API function*/}
        let Display = document.querySelector(".weatherData");
        Display.style.display = "grid";

        data.preventDefault();
        fetchWeather();  {/* Calling the Weather API*/}
    };

     let  fetchWeather = async()=>{         {/* Weather fetch API function*/}

        try{
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=60c60e36a60a4e580bba90d8904bc5fe`);

            setData(response.data); {/* Passing the city & State user searched data to setData variable which has been fetched by the API.*/}
        }
        catch(error){
            console.log(error);
        }


    };

    return(
        <>
        <div className="mainSpace" style={{marginTop: "55px"}}></div>
        <h1 id="header1">Pavan Weather ForeCast</h1>
        <div className="weather">
        <form onSubmit={handleSubmit}>
            <input type="text" id="userInput" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter State & City" autoComplete="off" required />
            <button type="submit" value="Search">Search</button>
        </form>

        <div className="weatherData">
        {Data && (
        <>
        <h4>{Data.name}, {Data.sys.country} <span style={{color:"white"}}>&nbsp;&nbsp;{date.toDateString()}</span></h4>  
        <p id="Same"><span style={{fontWeight:"lighter"}}>Description </span><b>{Data.weather[0].description}</b></p>
        <p id="Same"><span style={{fontWeight:"lighter"}}>Feels Like </span><b>{Data.main.feels_like}°C</b> <img src="https://img.icons8.com/?size=48&id=gHMMOkci3Ksa&format=png" alt="FeelsLike_Image" width="40px" height="30px" /></p>
        <p id="Same"><span style={{fontWeight:"lighter"}}>Wind </span><b>{Data.wind.speed}m/s</b> <img src="https://img.icons8.com/?size=48&id=RtDA8YDN9Mi9&format=png" alt="WindSpeed_Image" width="40px" height="30px"/></p>
        <p id="Same"><span style={{fontWeight:"lighter"}}>Humidity </span><b>{Data.main.humidity}</b> <img src="https://img.icons8.com/?size=100&id=I7Uv9dQ4WLYh&format=png&color=000000" alt="Humidity_Image" width="40px" height="30px"/></p>
        <p id="Same"><span style={{fontWeight:"lighter"}}>Visibility </span><b>{Data.visibility/1000}km</b> <img src="https://img.icons8.com/?size=48&id=zIVmoh4T8wh7&format=png" alt="Visibility_Image" width="40px" height="30px"/></p>
        <p id="Same"><span style={{fontWeight:"lighter"}}>Longitude </span><b>{Data.coord.lon}</b> <img src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" alt="Longitude_Image" width="40px" height="30px" /></p>
        <p id="Same"><span style={{fontWeight:"lighter"}}>Latitude </span><b>{Data.coord.lat}</b> <img src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" alt="Latitude_Image" width="40px" height="30px"/></p>

        </>
        )}
        </div>
        
        </div>
        </>
    );
};
export default Weather;