import "./App.css";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const anilmals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return anilmals[Math.floor(Math.random() * anilmals.length)];
}
function App() {
  const [anilmalss, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...anilmalss, getRandomAnimal()]);
  };
  // console.log(anilmalss)

  const renderedAnimals = anilmalss.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>;
  });

  return (
    <>
      <button onClick={handleClick}> Add Animal</button>
      <div className="App">
        <div className="animal-list">{renderedAnimals}</div>
      </div>
    </>
  );
}

export default App;
