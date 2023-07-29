export const WeatherData = async (city) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const response = await fetch(apiWeatherURL);
  const data = await response.json();
  return data;
};
