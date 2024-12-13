import React from "react";

const games = [
  { id: 1, name: "Word Twist" },
  { id: 2, name: "Word Sudoku" },
  { id: 3, name: "Cribbage" },
  // Add more games as needed
];

function Games() {
  //   const handleGameSelection = (gameName: string) => {
  //     alert(`You selected ${gameName}`);
  //     // Implement navigation or game start logic here
  //   };

  return (
    <div style={{ maxWidth: "50rem", margin: "0 auto" }}>
      <h1>Pick a Game to Play</h1>
      <p>IN DEVELOPMENT</p>
      <ul style={{ textAlign: "left" }}>
        {games.map((game) => (
          <li key={game.id}>
            {/* <button onClick={() => handleGameSelection(game.name)}>
                    {game.name}
                </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Games;
