import React from "react";
import { useWeather } from "../context/WeatherContext";
const WeatherCard = () => {
  const weather = useWeather();

  return (
    <div className="border-2 h-80 rounded-lg w-full bg-gradient-to-r from-teal-200 to-blue-200 flex  items-center justify-center">
      {weather.data ? (
        <>
          <div className="w-2/4 flex justify-center">
            <img
              src={weather?.data?.current.condition?.icon}
              alt=""
              className="w-40 h-40"
            />
          </div>
          <div className="flex flex-col gap-5 font-sans ">
            <h2 className="text-2xl font-semibold">
              {weather?.data?.current?.condition.text}
            </h2>
            <h3 className="text-3xl font-extrabold">
              {weather?.data?.location?.name},{" "}
              {weather?.data?.location?.country}
            </h3>
            <h2 className="text-2xl font-normal">
              Temp: {weather?.data?.current?.temp_c} &#8451;
            </h2>
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <h1>Please Select any city</h1>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
