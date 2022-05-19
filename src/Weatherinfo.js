import React from "react";
import "./Weatherinfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li></li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={75} />
          </div>
          <div className="float-left">
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
            <li>Max temp: {props.data.maxTemp} °C</li>
            <li>Min temp {props.data.minTemp}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
