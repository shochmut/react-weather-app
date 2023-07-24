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
import Stack from '@mui/material/Stack';
import { OPENWEATHER_KEY } from './openweatherAPI.jsx';
import axios from 'axios';


function App() {
  useEffect((value) => {
    fetchWeather(); // here we fetch the weather data
  }, [value]);

  async function fetchWeather() {
    //This is the api fetching function to request weather data from openweather using Axios
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${value.latitude}&lon=${value.longitude}&appid=${OPENWEATHER_KEY.key}`);
    console.log(response);
    // let temp = response.data.data.map((city) => city);
  }
  const handleOnSearchChange = () => {};

  return (
    <>
      <Stack
        id="app-wrapper"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <h1>Weather App</h1>
        <CityInput onSearchChange={handleOnSearchChange} />
        <WeatherDisplay />
      </Stack>
    </>
  );
}

export default App;
