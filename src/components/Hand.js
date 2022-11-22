import React from 'react'
import Board from "./Board";
import Tile from './Tile';

const letters = ['A', 'C', 'T', 'U', 'N', 'I', 'X', 'S', 'H', 'R', 'O', 'P'];
let handList = [];
for (let i = 0; i < 12; i++) {
    handList.push(<Board key={i} id={"hand" + i} className="board">
        <Tile id={"tile" + i} className="tile" draggable="true">
            <p id={letters[i]}>{letters[i]}</p>
        </Tile>
    </Board>)
  }

  //const el = document.getElementById('00');
  //window.alert(el.id);

function Hand() {
  return (
    <div className="handflex">
        {handList}
    </div>
  )
}

export default Hand