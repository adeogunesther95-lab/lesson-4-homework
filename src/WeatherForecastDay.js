import React from "react";
import "./Weather.css";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  return (
    <div className="weather-forecast-day container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="weather-day">{formatDay(props.data.dt)}</div>
          <div className="weather-display">
            <WeatherIcon code={props.data.weather[0].icon} />
          </div>
          <div className="temperature-container">
            <span className="temperature-max-value">
              {Math.round(props.data.temp.max)}
              <span className="temperature-units">°</span>
            </span>
            <span className="forecast-temperature-min-value">
              {Math.round(props.data.temp.min)}
              <span className="forecast-temperature-units">°</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
