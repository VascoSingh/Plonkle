import React, { useState } from "react";

//  const [grid, setGrid] = useState(Array(9).fill(' ').map(()=>Array(9).fill(' ')));


const useGame = () => {
  const [grid, setGrid] = useState(() => Array(9).fill(' ').map(()=>Array(9).fill(' ')));

  const placeTile = (tile, x, y) => {
    const newGrid = [...grid];
    newGrid[x][y] = tile;
    setGrid(newGrid);
  }
  
  const moveTile = (tile, prevx, prevy, x, y) => {
    const newGrid = [...grid];
    newGrid[x][y] = tile;
    newGrid[prevx][prevy] = ' ';
    setGrid(newGrid);
  }

  return {
    grid,
    placeTile,
    moveTile
  }

}

export default useGame