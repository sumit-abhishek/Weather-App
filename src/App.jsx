import WeatherInput from "./components/WeatherInput";
import WeatherCard from "./components/WeatherCard";
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
    <div className="flex flex-col items-center gap-20">
      <h1 className="font-bold text-5xl">Weather App</h1>
      <div className="flex flex-col items-center gap-14 ">
        <WeatherInput />
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
