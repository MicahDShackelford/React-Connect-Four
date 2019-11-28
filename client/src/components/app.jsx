import React from 'react';
import Board from './board';
import Pause from './pause';
import { timingSafeEqual } from 'crypto';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
      ["","","","","","",""],
      ["","","","","","",""],
      ["","","","","","",""],
      ["","","","","","",""],
      ["","","","","","",""],
      ["","","","","","",""]],
      nextPiece: "x",
      score: [0,0], //score[0] = red, score[1] = yellow
      paused: false,
      winner: ""
    }
    this.togglePiece = this.togglePiece.bind(this);
    this.restart = this.restart.bind(this);
  }

  togglePiece (row, col) {
    let boardCopy = this.state.board.slice();
    let changePiece = "";
    boardCopy[row][col] = this.state.nextPiece;
    if(this.state.nextPiece === 'x') {
      changePiece = 'o'; // O = RED
    }else {
      changePiece = 'x' // X = YELLOW
    }
    this.checkWin(boardCopy, this.state.nextPiece);
    this.setState({
      board: boardCopy,
      nextPiece: changePiece
    });
    console.log(this.state.board);
  }

  checkWin(board, nextPiece) {
    let winner;
    if(nextPiece === 'x') {
      winner = 'Yellow';
    }else {
      winner = 'Red';
    }
    this.setState({
      winner: winner
    })
    let checkVertWin = () => {
      let count = 0;
      for(var col = 0; col < board[0].length; col++) {
        count=0;
        for(var row = 0; row < board.length; row++) {
          if(board[row][col] === nextPiece) {
            count++;
          } else {
            count = 0;
          }
          if(count > 3) {
            let scoreCopy = this.state.score.slice();
            let elem = document.getElementById('pause');
            elem.style.display = 'flex';
            if(nextPiece === "yellow") {
              scoreCopy[0]++;
            }else {
              scoreCopy[1]++;
            }
            this.setState({
              paused: true,
              score: scoreCopy
            })
          }
        }
      }
    }
    let checkHoriWin = () => {
      let count = 0;
      for(var a = 0; a < board.length; a++) { // 6
        count = 0;
        for(var b = 0; b < board[a].length; b++) { // 7
          if(board[a][b] === nextPiece) {
            count++;
          }else {
            count = 0;
          }

          if(count > 3) {
            let scoreCopy = this.state.score.slice();
            let elem = document.getElementById('pause');
            elem.style.display = 'flex';
            if(nextPiece === "yellow") {
              scoreCopy[0]++;
            }else {
              scoreCopy[1]++;
            }
            this.setState({
              paused: true,
              score: scoreCopy
            });
          }
        }
      }
    }
    let checkDiagLRWin = () => {
      for(var row = 0; row < board.length-3; row++) {
        for(var col = 0; col < board[row].length-3; col++) {
            if(board[row][col] === nextPiece && board[row+1][col+1] === nextPiece && board[row+2][col+2] === nextPiece && board[row+3][col+3] === nextPiece) {
              let scoreCopy = this.state.score.slice();
              let elem = document.getElementById('pause');
              elem.style.display = 'flex';
              if(nextPiece === "yellow") {
                scoreCopy[0]++;
              }else {
                scoreCopy[1]++;
              }
              this.setState({
                paused: true,
                score: scoreCopy
              });
            }
        }
      }
    }
    let checkVertRLWin = () => {
      for(var row = 0; row < board.length-3; row++) {
        for(var col = 3; col < board[row].length; col++) {
            if(board[row][col] === nextPiece && board[row+1][col-1] === nextPiece && board[row+2][col-2] === nextPiece && board[row+3][col-3] === nextPiece) {
              let scoreCopy = this.state.score.slice();
              let elem = document.getElementById('pause');
              elem.style.display = 'flex';
              if(nextPiece === "yellow") {
                scoreCopy[0]++;
              }else {
                scoreCopy[1]++;
              }
              this.setState({
                paused: true,
                score: scoreCopy
              });
            }
        }
      }
    }
    checkVertWin();
    checkHoriWin();
    checkDiagLRWin();
    checkVertRLWin();
  }
  restart () {
    let pauseScrn = document.getElementById('pause');
    pauseScrn.style.display = "none";
    this.setState({
      board: [
        ["","","","","","",""],
        ["","","","","","",""],
        ["","","","","","",""],
        ["","","","","","",""],
        ["","","","","","",""],
        ["","","","","","",""]],
        nextPiece: "x",
        paused:false
    });

    for(var row = 0; row < this.state.board.length; row++) {
      for(var col = 0; col < this.state.board[row].length; col++) {
        let elem = document.getElementById(`${row.toString()}-${col.toString()}`);
        elem.className = "dot";
      }
    }
  }

  render() {
    return  (
      <div id="main-display">
        <Board board={this.state.board} togglePiece={this.togglePiece} nextPiece={this.state.nextPiece} paused={this.state.paused} />
        <Pause restart={this.restart} winner={this.state.winner} />
        <div id="score">
          <h1>Wins: </h1>
          <div>
            <div>
              <h2>Red: {this.state.score[0]}</h2>
            </div>
            <div>
              <h2>Yellow: {this.state.score[1]}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;