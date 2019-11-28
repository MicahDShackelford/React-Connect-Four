import React from 'react';

let Board = (props) => {
  let togglePiece = (event) => {
    //id = [row-col]
    if(!props.paused) {
      let color = "";
      if(props.nextPiece === "x") {
        color = 'yellow';
      }else {
        color = 'red';
      }
      let src = event.target.id.split("-");
      let srcRow = parseInt(src[0]);
      let srcCol = parseInt(src[1]);

      let toggleAnimation = (row) => {
        let elem = document.getElementById(`${row.toString()}-${srcCol.toString()}`);
        let prevElem;
        if(row !== 0) {
          prevElem = document.getElementById(`${(row-1).toString()}-${srcCol.toString()}`);
        }else {
          prevElem = null;
        }
        setTimeout(() => {
          if(elem.classList.length ===1) {
            if(prevElem !== null) {
              prevElem.classList.remove(color)
            }
            elem.classList.add(color);
          }
        }, 250*row);
      }

      for(var row = props.board.length-1; row >= 0; row--) {
        // console.log(props.board[row][srcCol]);
        // console.log(srcCol);
        // if this row col intersection === ""
          // toggle the piece here and break
        if(props.board[row][srcCol] === "") {
          props.togglePiece(row,srcCol);
          break;
        }
      }

      for(var row = 0; row < props.board.length; row++) {
        toggleAnimation(row);
      }
    }
  }
  return(
    <table className="connect-board">
      <tr>
        <td><div className="dot" id="0-0" onClick={togglePiece}></div></td>
        <td><div className="dot" id="0-1" onClick={togglePiece}></div></td>
        <td><div className="dot" id="0-2" onClick={togglePiece}></div></td>
        <td><div className="dot" id="0-3" onClick={togglePiece}></div></td>
        <td><div className="dot" id="0-4" onClick={togglePiece}></div></td>
        <td><div className="dot" id="0-5" onClick={togglePiece}></div></td>
        <td><div className="dot" id="0-6" onClick={togglePiece}></div></td>
      </tr>
      <tr>
        <td><div className="dot" id="1-0" onClick={togglePiece}></div></td>
        <td><div className="dot" id="1-1" onClick={togglePiece}></div></td>
        <td><div className="dot" id="1-2" onClick={togglePiece}></div></td>
        <td><div className="dot" id="1-3" onClick={togglePiece}></div></td>
        <td><div className="dot" id="1-4" onClick={togglePiece}></div></td>
        <td><div className="dot" id="1-5" onClick={togglePiece}></div></td>
        <td><div className="dot" id="1-6" onClick={togglePiece}></div></td>
      </tr>
      <tr>
        <td><div className="dot" id="2-0" onClick={togglePiece}></div></td>
        <td><div className="dot" id="2-1" onClick={togglePiece}></div></td>
        <td><div className="dot" id="2-2" onClick={togglePiece}></div></td>
        <td><div className="dot" id="2-3" onClick={togglePiece}></div></td>
        <td><div className="dot" id="2-4" onClick={togglePiece}></div></td>
        <td><div className="dot" id="2-5" onClick={togglePiece}></div></td>
        <td><div className="dot" id="2-6" onClick={togglePiece}></div></td>
      </tr>
      <tr>
        <td><div className="dot" id="3-0" onClick={togglePiece}></div></td>
        <td><div className="dot" id="3-1" onClick={togglePiece}></div></td>
        <td><div className="dot" id="3-2" onClick={togglePiece}></div></td>
        <td><div className="dot" id="3-3" onClick={togglePiece}></div></td>
        <td><div className="dot" id="3-4" onClick={togglePiece}></div></td>
        <td><div className="dot" id="3-5" onClick={togglePiece}></div></td>
        <td><div className="dot" id="3-6" onClick={togglePiece}></div></td>
      </tr>
      <tr>
        <td><div className="dot" id="4-0" onClick={togglePiece}></div></td>
        <td><div className="dot" id="4-1" onClick={togglePiece}></div></td>
        <td><div className="dot" id="4-2" onClick={togglePiece}></div></td>
        <td><div className="dot" id="4-3" onClick={togglePiece}></div></td>
        <td><div className="dot" id="4-4" onClick={togglePiece}></div></td>
        <td><div className="dot" id="4-5" onClick={togglePiece}></div></td>
        <td><div className="dot" id="4-6" onClick={togglePiece}></div></td>
      </tr>
      <tr>
        <td><div className="dot" id="5-0" onClick={togglePiece}></div></td>
        <td><div className="dot" id="5-1" onClick={togglePiece}></div></td>
        <td><div className="dot" id="5-2" onClick={togglePiece}></div></td>
        <td><div className="dot" id="5-3" onClick={togglePiece}></div></td>
        <td><div className="dot" id="5-4" onClick={togglePiece}></div></td>
        <td><div className="dot" id="5-5" onClick={togglePiece}></div></td>
        <td><div className="dot" id="5-6" onClick={togglePiece}></div></td>
      </tr>
    </table>
  )
}

export default Board;