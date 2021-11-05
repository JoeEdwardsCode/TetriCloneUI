import React, { useState } from 'react';

import { API } from "aws-amplify";

import Button from '@material-ui/core/Button';

import './App.css';

function App() {
  const [message, setMessage] = useState("Waiting to send API call.");

  function buttonHandler() {
    API.get("api", "ping", null).then(response => {
      setMessage(response.message);
    }).catch(e => {
      console.log("Requesting 'ping' failed: \n" + JSON.stringify(e));
      setMessage("API call failed.");
    });
  }

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={buttonHandler}>
        Ping
      </Button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
