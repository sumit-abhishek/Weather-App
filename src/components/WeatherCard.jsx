import React from "react";
import { useWeather } from "../context/WeatherContext";
const WeatherCard = () => {
  const weather = useWeather();
  return (
    <div className="weather-card">
      <img src={weather?.data?.current.condition?.icon} alt="" />
      <h2>{weather?.data?.current?.temp_c} &#8451;</h2>
      <h3>
        {weather?.data?.location?.name}, {weather?.data?.location?.region}{" "}
        {weather?.data?.location?.country}
      </h3>
    </div>
  );
};

export default WeatherCard;
