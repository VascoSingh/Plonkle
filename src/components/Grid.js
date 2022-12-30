import React from 'react'
import Board from "./Board";

let gridList = [];
for (let i = 0; i < 81; i++) {
    gridList.push(
    <Board 
    key={i} 
    id={"" + i%9 + "" + parseInt(i/9)} 
    className="board"/>
    )
  } //choldren list component

function Grid() {
  return (
    <div className="gridflex">
        {gridList}
    </div>
  )
} //e.target.value

export default Grid