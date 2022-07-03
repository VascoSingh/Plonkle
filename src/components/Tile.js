import React from 'react'

function Tile(props) {

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('tile_id', target.id);
    
    setTimeout(() => {
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