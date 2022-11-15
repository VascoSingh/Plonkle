import React, { useState } from "react";
const useGame = () => {

  const [grid, setGrid] = useState(Array(9).fill(' ').map(()=>Array(9).fill(' ')));

  const placeTile = (tile, x, y) => {
    const newGrid = [...grid];
    newGrid[x][y] = tile;
    setGrid(newGrid);
    console.log(newGrid);
  }

  return {
    grid,
    placeTile
  }

}

export default useGame