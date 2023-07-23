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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id='app-wrapper'>
        <h1>Hello</h1>
        <CityInput />
        <WeatherDisplay />
      </div>
    </>
  );
}

export default App;
