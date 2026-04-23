import React from "react";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info mt-4 container">
      <div className="row mt-5">
        <div className="col-8">
          <h1 className="city-search-placeholder">Lagos</h1>
          <ul>
            <li>
              <span className="city-search-day">Wednesday {""}</span>
              <span className="time-of-search">05:24, {""}</span>
              <span className="weather-condition">clear sky</span>
            </li>
            <li>
              <span className="humidity">
                Humidity:{" "}
                <strong className="humidity-value text-muted">60% {""}</strong>
              </span>
              <span className="wind">
                Wind: <strong className="wind-value text-muted">10km/h</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="weather-display">
            <img
              src="/img/clear-sky.png"
              alt="weather-icon"
              className="weather-icon"
              width={30}
            />
            <div>
              <span className="temperature-value">
                25
                <span className="temperature-units">°C</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
