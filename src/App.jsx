import WeatherInput from "./components/WeatherInput";
import WeatherCard from "./components/WeatherCard";
import Button from "./components/Button";
import { useWeather } from "./context/WeatherContext";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //Get Current Location
    weather.fetchUserCurrentLocation();
  }, []);
  const weather = useWeather();
  return (
    <>
      <h1>Weather App</h1>
      <WeatherInput />
      <Button value="Search" onClick={weather.fetchData} />
      <WeatherCard />
    </>
  );
}

export default App;
