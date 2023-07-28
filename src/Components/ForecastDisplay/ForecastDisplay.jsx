import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function ForecastDisplay({ data }) {
  console.log(data);

  return (
    <>
      <h1>Forecast</h1>
      <Stack direction="row" spacing={3} alignItems="center">
        <h1>{data.list.dt}</h1>
        <h1>Test</h1>
      </Stack>
    </>);
}

export default ForecastDisplay;
