"use client";
import { useState } from "react";

// TODO: 1. Replace history button with an undo button.
//       2. Add a reset button.
//       3. Appropriately style. Probably in an accordian.
//       4. Add the option to select a board size.
//       5. Add ability to select a win size.
//       6. Build computer player.
//        a. Random play
//        b. win-blocking play
//        c. win-seeking play
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{
        color: value === "X" ? "blue" : "red",
        background: "#fff",
        border: "1px solid #999",
        float: "left",
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "34px",
        height: "34px",
        marginRight: "-1px",
        marginTop: "-1px",
        padding: "0",
        textAlign: "center",
        width: "34px",
      }}
    >
      {value}
    </button>
  );
}

interface BoardProps {
  xTurn: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

function Board({ xTurn, squares, onPlay }: BoardProps) {
  function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xTurn ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xTurn ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  const xTurn = history.length % 2 !== 0;

  function handlePlay(nextSquares: (string | null)[]) {
    setHistory([...history, nextSquares]);
  }

  function jumpTo(step: number) {
    setHistory(history.slice(0, step + 1));
  }

  return (
    <div className="game" style={{ display: "flex", flexDirection: "row" }}>
      <div className="game-board">
        <Board xTurn={xTurn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move ? "Go to move #" + move : "Go to game start"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
