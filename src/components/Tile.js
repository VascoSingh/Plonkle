import React from 'react'
//import grid from './Board.js'

function Tile(props) {

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('tile_id', target.id);
    // Produces the letter value of the tile
    //window.alert(document.getElementById(target.id).parentNode.id);

    setTimeout(() => {
        //e.preventDeafult();
        target.style.display = "none";
    }, 0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
    >{ props.children }</div>
  )
}

export default Tile