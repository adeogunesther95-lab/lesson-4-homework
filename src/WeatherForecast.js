import React from "react";
import "./Weather.css";

export default function WeatherForecast(props) {
  return (
    <div className="weather-forecast mt-4 container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="weather-day">Thu</div>
          <div className="weather-display">
            <img
              src="/img/clear-sky.png"
              alt="weather-icon"
              className="weather-icon"
              width={30}
            />
          </div>
          <div>
            <span className="temperature-max-value">
              25
              <span className="temperature-units">°</span>
            </span>
            <span className="forecast-temperature-min-value">
              15
              <span className="forecast-temperature-units">°</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
