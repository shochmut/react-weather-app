import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';
import { GEODB_OPTIONS } from './geodbAPI.jsx';

function CityInput() {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchCities(); // here we fetch the api cities data
  }, [input]);

  useEffect(() => {
    fetchWeather(); // here we fetch the weather data given selected city
  }, []);

  async function fetchCities() {
    //This is the api fetching function to request city data from GeoDB using Axios
    GEODB_OPTIONS.params.namePrefix = input;
    console.log(GEODB_OPTIONS);
    let response = await axios.request(GEODB_OPTIONS);
    let temp = response.data.data.map((city) => city.name);
    setCities(temp);
  }

  async function fetchWeather() {
    //This is the api fetching function to request weather data from the OpenWeather api
    
  }

  return (
    <Stack sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        id="city-input"
        freesolo
        filterOptions={(x) => x} // disable filtering on client
        options={cities}
        onInputChange={(e, newInput) => setInput(newInput)}
        onChange={(e, newValue) => setValue(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="City" color="success"  />
        )}
      />
    </Stack>
  );
}

export default CityInput;
