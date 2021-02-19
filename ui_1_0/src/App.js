import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EuiBasicTable, EuiPanel } from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

import './App.css';

// The REST API endpoint
// const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const API_URL = 'http://127.0.0.1:5000/teambatting';

const App = () => {
  const columns = [
    {
      field: "Season",
      name: "Season"
    },
    {
      field: "Name",
      name: "Name",
      width: "100px"
    },
    {
      field: "Team",
      name: "Team"
    },
    {
      field: "Age",
      name: "Age"
    },
    {
      field: "G",
      name: "G"
    },
    {
      field: "AB",
      name: "AB",
      sortable: true,
    },
    {
      field: "PA",
      name: "PA"
    },
    {
      field: "H",
      name: "H"
    },
    {
      field: "1B",
      name: "1B"
    },
    {
      field: "2B",
      name: "2B"
    },
    {
      field: "3B",
      name: "3B"
    },
    {
      field: "HR",
      name: "HR"
    },
    {
      field: "R",
      name: "R"
    },
    {
      field: "RBI",
      name: "RBI"
    },
    {
      field: "BB",
      name: "BB"
    },
    {
      field: "IBB",
      name: "IBB"
    },
    {
      field: "SO",
      name: "SO"
    },
    {
      field: "HBP",
      name: "HBP"
    },
    {
      field: "SF",
      name: "SF"
    },
    {
      field: "SH",
      name: "SH"
    },
    {
      field: "GDP",
      name: "GDP"
    },
    {
      field: "SB",
      name: "SB"
    },
    {
      field: "CS",
      name: "CS"
    },
    {
      field: "AVG",
      name: "AVG"
    },
  ];

  // At the beginning, posts is an empty array
  const [players, setPlayers] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL).catch(error => console.error(error));
    setPlayers(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EuiPanel>
      {players.length > 0 ? (
        <EuiBasicTable
          items={players}
          columns={columns}
        />
      ) : (
        <p className="loading">Loading... </p>
      )}
    </EuiPanel>
  );
};

export default App;