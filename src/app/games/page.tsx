import React from "react";
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import Hero from "@/components/Hero";
import CardSet from "@/components/CardSet";
import TicTacToe from "@/components/games/TicTacToe";
import Chessboard from "@/components/games/Checkers/Checkers";
import AccordianSetGames from "@/components/AccordianSetGames";


const wordGames = [
  {
    title: "Hang Man",
    description: "A description NOT BUILT YET",
    link: "A link",
    buttonText: "go to game",
  },
  {
    title: "Word Twist",
    description: "A description NOT BUILT YET",
    link: "A link",
    buttonText: "go to game",
  },
  {
    title: "Word Sudoku",
    description: "A description NOT BUILT YET",
    link: "A link",
    buttonText: "go to game",
  },
];

const games1 = [
  {
    icon: <Grid3x3Icon />,
    title: "Tic Tac Toe",
    description:
      "Try to get three in a row. You get to play yourself!",
    detail: <TicTacToe />,
  },
  {
    icon: <JoinFullIcon />,
    title: "Checkers",
    description:
      "Queen me. NOT BUILT YET.",
    detail: <Chessboard />,
  },
];


function Games() {
  return (
    <div>
      <Hero
        title="Games by Snekly"
        subtitle="A collection of games created by Snekly"
      />
      <AccordianSetGames sectionTitle="Games" content={games1} />
      {/* <CardSet sectionTitle="Games" content={games} cardsInRow={3} /> */}
        {/* <Chessboard /> */}
      {/* <DragAndDrop /> */}
      <CardSet sectionTitle="Word Games" content={wordGames} cardsInRow={3} />
    </div>
  );
}

export default Games;
