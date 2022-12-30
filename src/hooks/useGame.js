import React, { useState } from "react";
import { useRef } from 'react';

//  const [grid, setGrid] = useState(Array(9).fill(' ').map(()=>Array(9).fill(' ')));


const useGame = () => {
  const gridRef = useRef(null);

  // Initialize the grid if it hasn't been initialized yet
  if (!gridRef.current) {
    gridRef.current = Array(9).fill(' ').map(()=>Array(9).fill(' '));
  }

  // Use the grid value in a state hook
  const [grid, setGrid] = useState(gridRef.current);

  const placeTile = (tile, x, y) => {
    const newGrid = [...grid];
    newGrid[x][y] = tile;
    setGrid(newGrid);
    console.log(grid);
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