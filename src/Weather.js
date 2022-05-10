import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData]=useState({ready:false})

  function handleResponse(response) {
    console.log(response.data);
    
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date:new Date(response.data.dt * 1000),
    });
  }


  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for city"
                autoFocus="on"
                className="searchbar"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>

        <ul>
          <li><FormattedDate date={weatherData.date}/></li>
          <li className="text-capitalize">{weatherData.description}</li>
          <li></li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />

            <span className="temp">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} m/s</li>
              <li>Max temp: {weatherData.maxTemp} °C</li>
              <li>Min temp {weatherData.minTemp}°C</li>
      
            </ul>
          </div>
        </div>
      </div>
    );
  }
  else {

      let apiKey = "c49eff189373b6b9c4fea0abf89e5033";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityDefault}&appid=${apiKey}&units=metric`;
      axios.get(url).then(handleResponse);
return"Loading..."
  }
}
