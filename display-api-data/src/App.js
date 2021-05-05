import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
//IMPORT COMPONENTS:
import DataTable from './components/DataTable';
import SelectDropdown from './components/SelectDropdown';
import BarChart from './components/BarChart';
//IMPORT MUI COMPONENTS
import { Grid, Typography } from '@material-ui/core';

const App = () => {

  //States
  const [apiData, setApiData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [totalIssues, setTotalIssues] = useState(0);
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
      calcTotalIssues(res.data.items);
      toChartData(res.data.items);
      setApiData(res.data.items);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error occured when getting data from API.\n"+err);
      setLoading(false);
    })
  }

  //Function to extract chart data
  const toChartData = (data) => {
    let chartData = {
      labels: [],
      datasets: [{
        label: "Antall open issues",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }]
    };

    data.map((repo) => {
      //Set repo names as labels
      chartData.labels.push(repo.name);
      //Set their open issues count as data
      chartData.datasets[0].data.push(repo.open_issues_count);
      //Set graph colors
      chartData.datasets[0].backgroundColor.push("#333333");
      chartData.datasets[0].borderColor.push("#333333");
    })

    console.log(chartData);
    setChartData(chartData);
  }

  //Function to calculate total open issues for all repos
  const calcTotalIssues = (data) => {
    let total = 0;

    data.map((repo) => {
      total += repo.open_issues_count;
    })

    setTotalIssues(total);
  }

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography variant="h4" component="h1">Sysco Kodeoppgave</Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Top 100 GitHub repositories sortert etter kodespråk
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {!loading && <Typography variant="h6" component="p">Totalt antall open issues: {totalIssues}</Typography>}
        </Grid>
      </Grid>
      <Grid container item xs={12} className="minHeight" alignItems="center" justify="center">
        {
          loading ? (
            <Typography>Lager graf...</Typography>
          ) : (
            <BarChart data={chartData} />
          )
        }
      </Grid>
      <Grid container item xs={12} direction="row" alignItems="center">
        <Typography variant="h6" component="p" className="paddingRight">Sorter listen: </Typography>
        <SelectDropdown setSelectedFunction={setSelectedValue} />
      </Grid>
      <Grid container item xs={12}  alignItems="center" justify="center">
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
