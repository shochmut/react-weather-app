import TextField from '@mui/material/TextField';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function CityInput() {

  return (
      <TextField 
        id='city-input' 
        variant='outlined' 
        fullwidth 
        color='success' 
        focused
      />
  );
}

export default CityInput;
