import TextField from '@mui/material/TextField';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GEODB_OPTIONS from './geodbAPI.jsx';
import GEODB_URL from './geodbAPI.jsx';

function CityInput() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
      fetch(GEODB_URL, GEODB_OPTIONS);
      .then((response) => response.json());
      .then((json) => setCities(json.data));
  }, []);
  console.log(cities);

  return (
    <TextField
      id="city-input"
      variant="outlined"
      fullwidth
      color="success"
      focused
    />
  );
}

export default CityInput;
