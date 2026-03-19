import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayForecastWeatherResult(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function displayWeather(event) {
    event.preventDefault();

    let apiKey = "bf602aabco34t729377499af62121a7a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecastWeatherResult);
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <header>
          <form className="search-form" onSubmit={displayWeather}>
            <input
              type="search"
              placeholder="Enter a city...."
              required
              className="search-input"
              onChange={handleSearch}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </header>
        <main>
          <div className="weather-container">
            <div>
              <h1 className="weather-app-city">London</h1>
              <p className="weather-app-details">
                <span id="time"></span> <span id="description"></span>
                <br />
                Humidity: <strong></strong>, Wind:
                <strong id="wind-speead"></strong>
              </p>
            </div>
            <div className="weather-app-temp">
              <div className="weather-app-icon"></div>
              <div className="weather-app-temp-value"></div>
              <div className="weather-app-temp-unit">°C</div>
            </div>
          </div>
          <div className="weather-forecast">
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
          </div>
        </main>
        <footer>
          Coded by
          <a
            href="https://github.com/adeogunesther95-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esther Adeogun
          </a>
          on
          <a
            href="https://github.com/adeogunesther95-lab/vanilla-weather-week8"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          hosted on
          <a
            href="https://vanilla-weather-week8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
