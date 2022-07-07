import React from 'react'
import Board from "./Board";
import Tile from './Tile';

const letters = ['A', 'C', 'T', 'U', 'N', 'I', 'X', 'S', 'H', 'R', 'O', 'P'];
let handList = [];
for (let i = 0; i < 12; i++) {
    handList.push(<Board id={"" + i/6 + "" + i%6} className="board">
        <Tile id={"tile" + i} className="tile" draggable="true">
            <p>{letters[i]}</p>
        </Tile>
    </Board>)
  }

function Hand() {
  return (
    <div className="handflex">
        {handList}
    </div>
  )
}

export default Hand