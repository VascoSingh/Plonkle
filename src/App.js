import React from "react";
import "./index.css";
//import {DndProvider} from 'react-dnd'
//import {HTML5Backend} from 'react-dnd-html5-backend'
//import { userState } from 'react';
//import Board from "./components/Board";
//import Tile from "./components/Tile";
import Grid from "./components/Grid"
import Hand from "./components/Hand";

function App(props) {
  //const [grid, setGrid] = userState('');
  //setGrid(Array(9).fill('x').map(()=>Array(9).fill('x')));
  return (
    //<DndProvider>
      <div className="App">
        <nav><h1>Plonkle</h1></nav>
        <Grid></Grid>
        <Hand></Hand>
      </div>
    //</DndProvider>
  );
}


export default App;