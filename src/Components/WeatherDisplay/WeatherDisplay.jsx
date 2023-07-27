import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import './weatherdisplay.css';

function WeatherDisplay({ data }) {
  console.log(data)
  return (
    <>
      <p className="city">{data.city}</p>
      <p className="weather-description">{data.weather[0].description}</p>
      <h2>Date</h2>
      <img alt='weather-icon' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
    </>
  );
}

export default WeatherDisplay;
