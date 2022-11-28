import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import VidContent from "./components/VidContent/VidContent";

const api = "https://swapi.py4e.com/api";

const getPeople = async () => {
  const data = await fetch(`${api}/people`);
  const result = await data.json();
  return result;
};

getPeople()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <VidContent />
    </div>
  );
};

export default App;
