import axios from "axios";
import "./App.css";
import React from "react";

function Weather() {
  return (
    <div className="container">
      <header></header>

      <footer>
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
  );
}

export default Weather;
