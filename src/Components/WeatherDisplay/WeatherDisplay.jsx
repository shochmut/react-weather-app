import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './weatherdisplay.css';

function WeatherDisplay({ data }) {
  console.log(data);
  const getDateTime = () => {
    // get a new date (locale machine date time)
    let date = new Date();
    // get the date as a string
    let n = date.toDateString();
    // get the time as a string
    let time = date.toLocaleTimeString();
    return n + ' ' + time;
  };
  return (
    <>
      <Stack justifyContent="flex-start" alignItems="flex-start">
        <h1 className="city weather-text">{data.city}</h1>
        <h2 className="weather-text">{getDateTime()}</h2>
        <Stack direction="row" gap={3}>
          <img
            alt="weather-icon"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
          <Stack
            padding={0}
            margin={1}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h1 className="temp weather-text">
              {Math.round(data.main.temp - 273)}°C
            </h1>
            <p className="feels-like weather-text">
              Feels Like: {Math.round(data.main.feels_like - 273)}°C
            </p>
          </Stack>
          <Grid
            className="weather-box"
            container
            columnSpacing={10}
            borderRadius={5}
            margin={1}
            sx={{ fontWeight: 'bold' }}
          >
            <Grid xs>
              <Stack spacing={0} justifyContent="center">
                <p className="weather-text">
                  {Math.round(data.main.temp_max - 273)}°C
                </p>
                <p className="weather-text label">High</p>
              </Stack>
              <Stack spacing={0} justifyContent="center">
                <p className="weather-text">
                  {Math.round(data.main.temp_min - 273)}°C
                </p>
                <p className="weather-text label">Low</p>
              </Stack>
            </Grid>
            <Grid xs>
              <Stack spacing={0} justifyContent="center">
                <p className="weather-text">{data.wind.speed}m/s</p>
                <p className="weather-text label">Wind</p>
              </Stack>
              <Stack spacing={0} justifyContent="center">
                <p className="weather-text">{data.main.humidity}%</p>
                <p className="weather-text label">Humidity</p>
              </Stack>
            </Grid>
            <Grid xs>
              <Stack spacing={0} justifyContent="center">
                <p className="weather-text">Test</p>
                <p className="weather-text label">Test</p>
              </Stack>
              <Stack spacing={0} justifyContent="center">
                <p className="weather-text">Test</p>
                <p className="weather-text label">Test</p>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}

export default WeatherDisplay;
