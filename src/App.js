import React, { useState } from "react";
import "./index.css";
//import {DndProvider} from 'react-dnd'
//import {HTML5Backend} from 'react-dnd-html5-backend'
//import Board from "./components/Board";
//import Tile from "./components/Tile";
import Grid from "./components/Grid"
import Hand from "./components/Hand";

function App(props) {
  const [grid, setGrid] = useState(Array(9).fill(' ').map(()=>Array(9).fill(' ')));
  grid[1][1] = 'x';
  //setGrid(grid);
  //Array(9).fill('x').map(()=>Array(9).fill('x'))
  return (
    <div className="App">
      <nav><h1>Plonkle</h1></nav>
      <Grid></Grid>
      <Hand></Hand>
    </div>
  );
}


export default App;