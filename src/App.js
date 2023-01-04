import React, { useState } from "react";
import "./index.css";
import Grid from "./components/Grid"
import Hand from "./components/Hand";



function App(props) {
  return (
    <div className="App">
      <nav><h1>Plonkle</h1></nav>
      <Grid></Grid>
      <Hand></Hand>
    </div>
  );
}


export default App;