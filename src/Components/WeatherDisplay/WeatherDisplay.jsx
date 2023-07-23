import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import './weatherdisplay.css';

function WeatherDisplay() {
  useEffect(() => {
    //fetchWeather(); // here we fetch the weather data given selected city
  }, []);

  return (
    <Stack
      id="weather-display-city"
      justifyContent="flex-start"
      direction="row"
      sx={{ width: 200, margin: 'auto' }}
    >
      <h1>Hello</h1>
    </Stack>
  );
}

export default WeatherDisplay;
