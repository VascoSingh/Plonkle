import React from 'react'
import Board from "./Board";

let gridList = [];
for (let i = 0; i < 81; i++) {
    gridList.push(<Board id={"" + i%9 + "" + parseInt(i/9)} className="board"></Board>)
  }

function Grid() {
  return (
    <div className="gridflex">
        {gridList}
    </div>
  )
}

export default Grid