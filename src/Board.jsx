import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Square from "./Square";
import Winner from "./Winner";
function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (board[a] === board[c] && board[b] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes(null)) {
      return "match draw";
    }
    return false;
  };
  const winner = checkWinner();
  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };
  const handleClick = (index) => {
    if (board[index] !== null) {
      return;
    }
    const copyBoard = [...board];
    copyBoard[index] = isXturn ? "X" : "0";

    setBoard(copyBoard);
    setIsXturn(!isXturn);
  };
  return (
    <>
      <div className="board-container">
        {winner && <Winner winner={winner} handleReset={handleReset} />}
        <>
          <h2 className="board-row">
            Player <span className="player">{isXturn ? "X" : "0"} </span> Turn
          </h2>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={board[0]} />
            <Square onClick={() => handleClick(1)} value={board[1]} />
            <Square onClick={() => handleClick(2)} value={board[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={board[3]} />
            <Square onClick={() => handleClick(4)} value={board[4]} />
            <Square onClick={() => handleClick(5)} value={board[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={board[6]} />
            <Square onClick={() => handleClick(7)} value={board[7]} />
            <Square onClick={() => handleClick(8)} value={board[8]} />
          </div>
        </>
      </div>
    </>
  );
}

export default Board;
