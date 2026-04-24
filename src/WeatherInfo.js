import React from "react";
import "./Weather.css";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info mt-4 container">
      <div className="row mt-5">
        <div className="col-8">
          <h1 className="city-search-placeholder">{props.data.city}</h1>
          <ul>
            <li>
              <span className="city-search-day">Wednesday {""}</span>
              <span className="time-of-search">05:24, {""}</span>
              <span className="weather-condition">
                {props.data.description}
              </span>
            </li>
            <li>
              <span className="humidity">
                Humidity:{" "}
                <strong className="humidity-value text-muted">
                  {props.data.humidity}% {""}
                </strong>
              </span>
              <span className="wind">
                Wind:{" "}
                <strong className="wind-value text-muted">
                  {props.data.wind} km/h
                </strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="weather-display">
            <div className="weather-icon">
              <WeatherIcon code={props.data.icon} height={55} width={60} />
            </div>
            <div>
              <span className="temperature-value">
                {Math.round(props.data.temperature)}
                <span className="temperature-units">°C</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
