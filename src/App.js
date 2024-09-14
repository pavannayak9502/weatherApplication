import React from "react";
import "../src/App.css";
import Weather from "./Component/WeatherFile/Weather.js";

let App=()=>{

  return(
    <>
    <div className="weather_App">
      <Weather />
    </div>
    </>
  );

};
export default App;