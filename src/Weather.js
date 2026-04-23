import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  let city = props.city;
  let apiKey = "7797aa5c054d2bf0b327b9a77385efb6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <main className="Weather container">
      <form className="container">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success" />
          </div>
        </div>
      </form>
      <WeatherInfo />
      <WeatherForecast />
    </main>
  );
}
