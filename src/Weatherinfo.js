import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return( <div className="Weatherinfo">
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
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />

            <span className="temp">{props.data.temperature}</span>
            <span className="unit">°C</span>
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
      
  </div>);
}
