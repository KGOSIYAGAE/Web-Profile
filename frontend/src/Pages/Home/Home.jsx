import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="left">
          <div className="details">
            <p>HI THERE 👋 I'M</p>
            <span className="name-lable">Kgosiyagae Motabogi</span>
            <span className="work-title">DEVELOPER + UI/UX DESIGNER 💻</span>
            <span className="work-summary">I'm a proffessional App developer with UI/UX Designer skills based in Kimberley</span>
            <button className="btn-hire-me">Hire Me</button>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src="../public/sticker-laptop.webp" alt="" className="img-sticker" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
