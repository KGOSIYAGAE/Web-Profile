import React from "react";
import "../src/App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
