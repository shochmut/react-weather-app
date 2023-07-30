import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './forecastdisplay.css';

function ForecastDisplay({ data }) {
  console.log(data);

  const getDateTime = (input) => {
    // get a new date (locale machine date time)
    let date = new Date(input*1000);
    // get the date as a string
    let n = date.toDateString();
    // get the time as a string
    let time = date.toLocaleTimeString();
    return [n, time];
  };

  return (
    <>
      <h1 className="forecast-text">Forecast</h1>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
        {data.list.filter((timepoint, index) => index%4 == 0).map(timepoint => {
          return(
          <Stack width={100} className="forecast-box" borderRadius={5}>
            <p className="forecast-text">{getDateTime(timepoint.dt)[0]}</p>
            <p className="forecast-text">{getDateTime(timepoint.dt)[1]}</p>
            <img className="forecast-icon" src={`icons/${timepoint.weather[0].icon}.png`} />
          </Stack>
          )
          })}
      </Stack>
    </>);
}

export default ForecastDisplay;
