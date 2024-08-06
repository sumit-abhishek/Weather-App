import { createContext, useContext, useState } from "react";
import { getWeatherDataCity, getWeatherDataLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [citySearch, setCitySearch] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataCity(citySearch);
    setData(response);
  };

  const fetchUserCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <WeatherContext.Provider
      value={{
        citySearch,
        setCitySearch,
        data,
        fetchData,
        fetchUserCurrentLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
