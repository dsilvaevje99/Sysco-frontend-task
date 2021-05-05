import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
//IMPORT COMPONENTS:
import DataTable from './components/DataTable';
import SelectDropdown from './components/SelectDropdown';
//IMPORT MUI COMPONENTS
import { Grid, Typography } from '@material-ui/core';

const App = () => {

  //States
  const [apiData, setApiData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("javascript");
  const [loading, setLoading] = useState(false);
  //API URL
  const url = "https://api.github.com/search/repositories?q=language:"+selectedValue+"&sort=stars&order=desc&per_page=100";

  //On selected value change
  useEffect(() => {
    getData(url);
  },[selectedValue])

  //Function to fetch data from API
  const getData = async (url) => {
    setLoading(true);

    axios.get(url)
    .then((res) => {
      console.log(res);
      setApiData(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error occured when getting data from API.\n"+err);
      setLoading(false);
    })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">Sysco Kodeoppgave</Typography>
      </Grid>
      <Grid item xs={12}>
        <SelectDropdown setSelectedFunction={setSelectedValue} />
      </Grid>
      <Grid item xs={12}>
        {
          loading ? (
            <Typography>Laster inn data...</Typography>
          ) : (
            <DataTable data={apiData} />
          )
        }
      </Grid>
    </Grid>
  );
}

export default App;
