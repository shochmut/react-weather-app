import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function ForecastDisplay({ data }) {
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
      <h1>Forecast</h1>
      <Stack direction="row" spacing={3} alignItems="center">
        <h1>{getDateTime(data.list[0].dt)}</h1>
        <h1>Test</h1>
      </Stack>
    </>);
}

export default ForecastDisplay;
