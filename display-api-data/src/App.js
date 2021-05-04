import React, { useState, useEffect } from 'react';
import './App.css';
//IMPORT COMPONENTS:
import Table from './components/Table';
import SelectDropdown from './components/SelectDropdown';
//IMPORT MUI COMPONENTS
import Typography from '@material-ui/core/Typography';

const App = () => {

  const [apiData, setApiData] = useState();
  const [selectedValue, setSelectedValue] = useState("");

  //Function to fetch info from API

  return (
    <>
      <Typography variant="h4" component="h1">Sysco Kodeoppgave</Typography>
      <SelectDropdown />
      <Table />
    </>
  );
}

export default App;
