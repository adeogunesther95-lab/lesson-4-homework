import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            href="https://www.linkedin.com/in/esther-adeogun-0b9118125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/ea-logo.png"
              alt="ea-logo"
              className="ea-logo mt-0"
              width={40}
            />
          </a>
        </header>
        <Weather defaultCity="Lagos" />
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/adeogunesther95-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esther Adeogun{" "}
          </a>
          on {""}
          <a
            href="https://github.com/adeogunesther95-lab/lesson-4-homework"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub {""}
          </a>
          hosted on {""}
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
