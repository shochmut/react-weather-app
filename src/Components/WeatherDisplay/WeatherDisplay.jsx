import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './weatherdisplay.css';

function WeatherDisplay({ data }) {
  console.log(data)
  return (
    <>
      <Stack>
        <h1 className="city">{data.city}</h1>
        <h2>Date</h2>
        <Stack direction="row" gap={5}>
          <img alt='weather-icon' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
          <Stack>
            <h1 className="temp">{data.main.temp}</h1>
            <p className="feels-like">Feels Like: {data.main.feels_like}</p>
          </Stack>
          <Grid className="weather-box" container columnSpacing={10} borderRadius={5}>
            <Grid xs>
              <p>Test</p>
              <p>Test</p>
            </ Grid>
            <Grid xs>
              <p>Test</p>
              <p>Test</p>
            </Grid>
            <Grid xs>
              <p>Test</p>
              <p>Test</p>
            </Grid>
          </Grid>
          
        </Stack>
      </Stack>

    </>
  );
}

export default WeatherDisplay;
