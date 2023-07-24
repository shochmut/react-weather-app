import { useState } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CityInput from './Components/CityInput/CityInput.jsx';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay.jsx';
import Stack from '@mui/material/Stack';

function App() {
  const [count, setCount] = useState(0);

  const handleOnSearchChange = (value) => {
    
  }

  return (
    <>
      <Stack id='app-wrapper' alignItems="flex-start" justifyContent='flex-start'>
        <h1>Weather App</h1>
        <CityInput onSearchChange={handleOnSearchChange}/>
        <WeatherDisplay />
      </Stack>
    </>
  );
}

export default App;
