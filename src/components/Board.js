import React, { useState } from "react";

export const grid = Array(9).fill(' ').map(()=>Array(9).fill(' '));

function Board(props) {
  
  const drop = e => {
    e.preventDefault();
    const tile_id = e.dataTransfer.getData('tile_id');

    const tile = document.getElementById(tile_id);
    tile.style.display = 'block';
    //if(e.target.hasChildNodes() === false && e.target.id.length === 2) {
    //    window.alert(e.target.id);
    //}
    e.target.appendChild(tile);


    const gridNum = e.target.id;
    grid[Math.floor(gridNum/10)][Math.floor(gridNum%10)] = tile.firstChild.id;
    
    //const el = document.getElementById('1');

    //THIS ONE WORKS
    //window.alert(tile.firstChild.id);

    //THIS IS FOR GRID NUMBER
    window.alert(e.target.id);
    

    window.alert(grid);
  }

  const dragOver = e => {
    //if(e.target.id.length !== 2) {
    //    handNum--;
    //}
    //if(handNum <= 0) {
    //    window.alert('none in hand');
    //}
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
