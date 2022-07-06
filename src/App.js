import React from "react";
import "./index.css";
//import {DndProvider} from 'react-dnd'
//import {HTML5Backend} from 'react-dnd-html5-backend'
//import { userState } from 'react';
import Board from "./components/Board";
import Tile from "./components/Tile";

function App(props) {
  //const [grid, setGrid] = userState('');
  //setGrid(Array(9).fill('x').map(()=>Array(9).fill('x')));
  return (
    //<DndProvider>
      <div className="App">
        <nav><h1>Plonkle</h1></nav>
        <div className="flexbox">
          <Board id="board-1" className="board">
            <Tile id="tile-1" className="tile" draggable="true">
              <p>A</p>
            </Tile>
          </Board>

          <Board id="board-2" className="board">
            <Tile id="tile-2" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-3" className="board">
            <Tile id="tile-3" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-4" className="board">
            <Tile id="tile-4" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-5" className="board">
            <Tile id="tile-5" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-6" className="board">
            <Tile id="tile-6" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>
        
          <Board id="board-7" className="board">
            <Tile id="tile-7" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-8" className="board">
            <Tile id="tile-8" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-9" className="board">
            <Tile id="tile-9" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-10" className="board">
            <Tile id="tile-10" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-11" className="board">
            <Tile id="tile-11" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>

          <Board id="board-12" className="board">
            <Tile id="tile-12" className="tile" draggable="true">
              <p>B</p>
            </Tile>
          </Board>
          </div>
      </div>
    //</DndProvider>
  );
}


export default App;