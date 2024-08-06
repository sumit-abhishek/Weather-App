const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=b7fe4a42f8404532830151139240508";

export const getWeatherDataCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
