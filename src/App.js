import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <form class="search-form" id="search-form">
            <input
              type="search"
              id="search-form-input"
              placeholder="Enter a city...."
              required
              class="search-input"
            />
            <button type="submit" class="search-button" id="search-button">
              Search
            </button>
          </form>
        </header>
        <main>
          <div class="weather-container">
            <div>
              <h1 class="weather-app-city" id="weather-app-city"></h1>
              <p class="weather-app-details">
                <span id="time"></span> <span id="description"></span>
                <br />
                Humidity: <strong id="humidity"></strong>, Wind:
                <strong id="wind-speead"></strong>
              </p>
            </div>
            <div class="weather-app-temp">
              <div class="weather-app-icon" id="icon"></div>
              <div class="weather-app-temp-value" id="temperature"></div>
              <div class="weather-app-temp-unit">°C</div>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </main>
        <footer>
          Coded by
          <a href="https://github.com/adeogunesther95-lab" target="_blank">
            Esther Adeogun
          </a>
          on
          <a
            href="https://github.com/adeogunesther95-lab/vanilla-weather-week8"
            target="_blank"
          >
            GitHub
          </a>
          hosted on
          <a href="https://vanilla-weather-week8.netlify.app/" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
