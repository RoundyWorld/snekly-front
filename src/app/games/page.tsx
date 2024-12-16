import Hero from "@/components/Hero";
import CardSet from "@/components/CardSet";
import React from "react";

const repositories = [
  {
    title: "Hang Man",
    description: "A description",
    link: "A link",
    buttonText: "go to game",
  },
  {
    title: "Tic Tac Toe",
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
      <CardSet
        sectionTitle="Word Games"
        content={repositories}
        cardsInRow={3}
      />
    </div>
  );
}

export default Games;
