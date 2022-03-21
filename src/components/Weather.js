import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

import '../components/Weather.css';


const Weather = () => {

    const [ weather, setWeather] = useState(null)
    const [ location, setLocation] = useState(null)
    const [ forecast, setForecast] = useState(null)

useEffect(() => {

    async function getWeather(){
        const resp = await fetch('http://api.weatherapi.com/v1/forecast.json?key=17e70e0a9795468eb83221716222003&q=London&days=7&aqi=no&alerts=no');
        const data = await resp.json()

        console.log(data.current)
        setWeather(data.current)

        console.log(data.location)
        setLocation(data.location)

        console.log(data.forecast)
        setForecast(data.forecast.forecastday)
        
    }

    getWeather()

}, []);

    return (
        
        <div>

        <input className="searchbar" type="text" title="Search" />

            <WeatherCard 
            icon={weather?.condition.icon}
            temp_f={weather?.temp_f}
            name={location?.name}
            text={weather?.condition.text}
            region={location?.region}
            />

            {forecast?.map(date => (
            <Forecast 
            maxtemp_f={date.day.maxtemp_f} 
            />  
            ))}
            
        </div>
    );
}

export default Weather;