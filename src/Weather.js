import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>Lisbon</h1>

      <ul>
        <li>Wednesday 07:00 pm</li>
        <li>Mostly cloudy</li>
        <li></li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
            className="float-left"
          />

          <span className="temp">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity</li>
            <li>Wind</li>
            <li>Max temp</li>
            <li>Min temp</li>
            <li>Percepitation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
