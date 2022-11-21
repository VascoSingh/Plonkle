//import React, { useState } from "react";
import useGame from "../hooks/useGame";

//export const grid = Array(9).fill(' ').map(()=>Array(9).fill(' '));

function Board(props) {

  let {
    grid,
    placeTile,
    moveTile
  } = useGame();
  
  const drop = e => {
    e.preventDefault();
    const tile_id = e.dataTransfer.getData('tile_id');
    const curNum = document.getElementById(tile_id).parentNode.id;
    const tile = document.getElementById(tile_id);
    tile.style.display = 'block';
    e.target.appendChild(tile);
    const gridNum = e.target.id;
    window.alert(gridNum);
    // Logic for moving / placing tiles 
    window.alert(grid[0]);
    window.alert(curNum);
    if (!isNaN(curNum)) {
      // Edge case for moving tiles back to hand
      // if (isNaN(gridNum)) {
      //   moveTile(' ', Math.floor(curNum / 10), Math.floor(curNum % 10), Math.floor(gridNum / 10), Math.floor(gridNum % 10));
      // } else {
      moveTile(tile.firstChild.id, Math.floor(curNum / 10), Math.floor(curNum % 10), Math.floor(gridNum / 10), Math.floor(gridNum % 10));
      window.alert("moving...");
    } else {
      placeTile(tile.firstChild.id, Math.floor(gridNum / 10), Math.floor(gridNum % 10));
      window.alert("placing...");
    }
  }

  const dragOver = e => {
    e.preventDefault();
  }
  
    return (
    <div
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
    >{ props.children }</div>
  )
}

export default Board
