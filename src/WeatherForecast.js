import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(false), [props.lat, props.lon]);

  function handleResponse(response) {
    setForecastWeatherData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weather-forecast mt-4 container">
        <div className="row justify-content-center">
          {forecastWeatherData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "7797aa5c054d2bf0b327b9a77385efb6";
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
