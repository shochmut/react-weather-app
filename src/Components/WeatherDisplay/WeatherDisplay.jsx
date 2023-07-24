import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import './weatherdisplay.css';

function WeatherDisplay() {
  useEffect(() => {
    //fetchWeather(); // here we fetch the weather data given selected city
  }, []);

  return (
    <>
      <h1>City</h1>
      <h2>Date</h2>
    </>
  );
}

export default WeatherDisplay;
