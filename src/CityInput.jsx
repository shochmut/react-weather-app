import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GEODB_OPTIONS } from './geodbAPI.jsx';
import { GEODB_URL } from './geodbAPI.jsx';
import axios from 'axios';

function CityInput() {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('useeffect has been called');
    fetch(GEODB_URL, GEODB_OPTIONS)
      .then((response) => response.json())
      .then((json) => setCities(json.data));
  }, [cities]);
  console.log(cities);

  return (
    <Stack sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        id="city-input"
        freesolo
        filterOptions={(x) => x} // disable filtering on client
        options={cities}
        onInputChange={(e, newInput) => setInput(newInput)}
        renderInput={(params) => <TextField {...params} label="Combo box" />}
      />
    </Stack>
  );
}

export default CityInput;
