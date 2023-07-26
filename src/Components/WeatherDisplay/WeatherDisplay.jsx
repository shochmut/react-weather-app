import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import './weatherdisplay.css';

function WeatherDisplay({ data }) {
  console.log(data)
  return (
    <>
      <p classname="city">{data.city}</p>
      <p classname="weather-description">{data.weather[0].description}</p>
      <h2>Date</h2>
    </>
  );
}

export default WeatherDisplay;
