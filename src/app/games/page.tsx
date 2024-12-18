import Hero from "@/components/Hero";
import CardSet from "@/components/CardSet";
import React from "react";
import TicTacToe from "@/components/games/TicTacToe";

const games = [
  {
    title: "Tic Tac Toe",
    description: "A description",
    link: "A link",
    buttonText: "go to game",
  },
];

const wordGames = [
  {
    title: "Hang Man",
    description: "A description",
    link: "A link",
    buttonText: "go to game",
  },
  {
    title: "Word Twist",
    description: "A description",
    link: "A link",
    buttonText: "go to game",
  },
  {
    title: "Word Sudoku",
    description: "A description",
    link: "A link",
    buttonText: "go to game",
  },
];

function Games() {
  return (
    <div>
      <Hero
        title="Games by Snekly"
        subtitle="A collection of games created by Snekly"
      />
      <CardSet sectionTitle="Games" content={games} cardsInRow={3} />
      <CardSet sectionTitle="Word Games" content={wordGames} cardsInRow={3} />
      <TicTacToe />
    </div>
  );
}

export default Games;
