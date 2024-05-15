import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-items">
          <span className="item active">Home</span>
          <span className="item">About</span>
          <span className="item">Skill</span>
          <span className="item">Portfolio</span>
          <span className="item">Contatct Me</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
