import React from 'react'

function Board(props) {
  const drop = e => {
    e.preventDefault();
    const tile_id = e.dataTransfer.getData('tile_id');

    const tile = document.getElementById(tile_id);
    tile.style.display = 'block';

    e.target.appendChild(tile);
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