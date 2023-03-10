import React, { useState } from "react";
import "./App.css";
import { fetchweather } from "./Api/FetchWeather";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await fetchweather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Enter the city name in here"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      {/* {errorMessage && <div className="error"> {errorMessage} </div>} */}
      {weather.main && (
        <div className="city">
          <div className="date"> {new Date().toDateString("en-US")}</div>
          {/* <div className="date"> {new Date().toDateString("en-us")}</div> */}

         
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
          <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
