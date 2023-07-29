//const apiKey = process.env.API_KEY;
//console.log(apiKey);

export const WeatherData = async (city) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  console.log(apiKey);
  console.log(apiWeatherURL);

  const response = await fetch(apiWeatherURL);
  const data = await response.json();
  return data;
};
