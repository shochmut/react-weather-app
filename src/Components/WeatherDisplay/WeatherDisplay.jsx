import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import './weatherdisplay.css';

function WeatherDisplay({ data }) {
  
  
  
  return (
    <>
      <h1>{data.city}</h1>
      <h2>Date</h2>
    </>
  );
}

export default WeatherDisplay;
