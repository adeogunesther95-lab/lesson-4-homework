import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
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
