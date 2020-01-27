import React from "react";
import "./App.css";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

const App = () => {
  const animalsInHTML = animals.map((singleAnimal, i) => {
    return <li>{singleAnimal}</li>;
  });

  return <ul>{animalsInHTML}</ul>;
};

export default App;
