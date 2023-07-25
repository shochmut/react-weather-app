import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';
import { GEODB_OPTIONS } from '../../geodbAPI.jsx';

const CityInput = ({ onSearchChange }) => {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchCities(); // here we fetch the api cities data
  }, [input]);

  async function fetchCities() {
    //This is the api fetching function to request city data from GeoDB using Axios
    GEODB_OPTIONS.params.namePrefix = input;
    let response = await axios.request(GEODB_OPTIONS);
    let temp = response.data.data.map((city) => city);
    setCities(temp);
  }

  return (
    <Stack id="city-input-box" sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        id="city-input"
        freesolo
        filterOptions={(x) => x} // disable filtering on client
        options={cities}
        getOptionLabel={(city) => city.name}
        onInputChange={(e, newInput) => setInput(newInput)}
        onChange={(e, newValue) => {
          setValue(newValue);
          onSearchChange(value);
        }}
        renderInput={(params) => (
          <TextField {...params} label="City" color="success" fullwidth />
        )}
      />
    </Stack>
  );
};

export default CityInput;
