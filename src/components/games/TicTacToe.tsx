"use client";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { sneklyLicorice, sneklyOrange } from "@/theme";
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';

// TODO: 1. Continue to improve style.
//       2. Track wins.
//       3. Maybe add a win animation.
//       4. Finish adding the option to select a board size.
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
        color: value === "X" ? `${sneklyOrange}` : `${sneklyLicorice}`,
        border: "2px solid #999",
        float: "left",
        fontSize: "30px",
        fontWeight: "bold",
        height: "40px",
        width: "40px",
        textAlign: "center",
      }}
    >
      {value}
    </button>
  );
}

interface BoardProps {
  sideLength: number;
  xTurn: boolean;
  squares: (string | null)[];
  // setWinner: (winner: string | null) => void;
  onPlay: (nextSquares: (string | null)[]) => void;
}

function Board({ sideLength, xTurn, squares, onPlay }: BoardProps) {

  function calculateWinner(squares: (string | null)[]) {
    // Check rows
    for (let i = 0; i < squares.length; i += sideLength) {
      const row = squares.slice(i, i + sideLength);
      if (row.every((square) => square === row[0])) return row[0];
    }
    // Check columns
    for (let i = 0; i < sideLength; i++) {
      const column = squares.filter((_, j) => j % sideLength === i);
      if (column.every((square) => square === column[0])) return column[0];
    }
    // Check diagonals
    const diagonal1 = squares.filter((_, i) => i % (sideLength + 1) === 0);
    if (diagonal1.every((square) => square === diagonal1[0])) return diagonal1[0];
    const diagonal2 = squares.filter((_, i) => i % (sideLength - 1) === 0 && i > 0 && i < squares.length - 1);
    if (diagonal2.every((square) => square === diagonal2[0])) return diagonal2[0];
    // Check CAT
    if (!squares.some((square) => !square)) return "CAT";
    
    return null;
  }

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xTurn ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  // let status;
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next player: " + (xTurn ? "X" : "O");
  // }

  return (
    <>
      <div>
        {squares.map((square, i) => (
          <Fragment key={i} >
            {i !== 0 && i % sideLength === 0 && <br />}
            <Square value={square} onSquareClick={() => handleClick(i)} />  
          </Fragment>
        ))}
      </div>
      {winner ? <Typography> WINNER: {winner}</Typography> : <Typography>Next Player: {xTurn ? "X" : "O"}</Typography>}
    </>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [sideLength, setSideLength] = useState(3);
  // const [winner, setWinner] = useState<string | null>(null);
  const currentSquares = history[history.length - 1];
  const xTurn = history.length % 2 !== 0;

  function handlePlay(nextSquares: (string | null)[]) {
    setHistory([...history, nextSquares]);
  }

  function jumpTo(step: number) {
    setHistory(history.slice(0, step + 1));
  }

  function handleSideChange(newSide: number) {
    setSideLength(newSide);
    setHistory([Array((newSide) * (newSide)).fill(null)]);
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row", gap: "10px"}}>
      <div id="tictactoeForm">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="sideLengthLabel">Set Board Size</InputLabel>
          <Select
            labelId="sideLengthLabel"
            id="sideLength"
            value={sideLength}
            label="Set Board Size"
            onChange={(event: SelectChangeEvent<number>) => handleSideChange(Number(event.target.value))}
            autoWidth
            style={{ textAlign: "center" }}
          >
            {Array.from({ length: 13 }, (_, i) => i + 3).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Button variant="contained" onClick={() => jumpTo(0)} style={{ flex: 1 }}><DeleteIcon/></Button>
              <Button color="info" variant="contained" onClick={() => jumpTo(history.length - 2)} style={{ flex: 1 }}><UndoIcon/></Button>
            </div>
        </FormControl>
      </div>
      <div id="tictactoeBoard">
        <Board sideLength={sideLength} xTurn={xTurn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      {/* <div className="game-info">
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move ? "Go to move #" + move : "Go to game start"}
              </button>
            </li>
          ))}
        </ol>
      </div> */}
    </div>
    </>
  );
}
