import { useState, useEffect } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CityInput from './Components/CityInput/CityInput.jsx';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay.jsx';
import ForecastDisplay from './Components/ForecastDisplay/ForecastDisplay.jsx';
import Stack from '@mui/material/Stack';
import { OPENWEATHER_KEY } from './openweatherAPI.jsx';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async (value) => {
    //This is the api fetching function to request weather data from openweather using Axios
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${value.latitude}&lon=${value.longitude}&appid=${OPENWEATHER_KEY.key}`
      );
      response.data.city = value.city;
      setWeatherData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchForecast = async (value) => {
    //This is the api fetching function to request forecast data from openweather using Axios
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${value.latitude}&lon=${value.longitude}&appid=${OPENWEATHER_KEY.key}`
      );
      response.data.city = value.city;
      setForecastData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleOnSearchChange = (value) => {
    fetchWeather(value);
    fetchForecast(value);
  }; 

  return (
    <>
      <Stack
        id="app-wrapper"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <h1>Weather App</h1>
        <CityInput onSearchChange={handleOnSearchChange} />
        {weatherData && <WeatherDisplay data={weatherData} />}
        {forecastData && <ForecastDisplay data={forecastData} />}
      </Stack>
    </>
  );
}

export default App;
