import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherInput = () => {
  const weather = useWeather();
  console.log(weather);
  return (
    <input
      className="weather-input"
      type="text"
      placeholder="Search Here"
      value={weather.citySearch}
      onChange={(e) => weather.setCitySearch(e.target.value)}
    />
  );
};

export default WeatherInput;
