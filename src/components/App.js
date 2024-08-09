
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  let weather= { temperature: 25, conditions: "Sunny" };
  

    return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions}/>
    </div>
  )
}

export default App
