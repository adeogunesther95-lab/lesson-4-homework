import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <form className="search-form">
            <input
              type="search"
              placeholder="Enter a city...."
              required
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </header>
        <main>
          <div className="weather-container">
            <div>
              <h1 className="weather-app-city"></h1>
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
          <div className="weather-forecast"></div>
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
