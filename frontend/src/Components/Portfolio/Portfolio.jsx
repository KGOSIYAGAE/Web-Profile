import React, { useState } from "react";
import "./Portfolio.css";
import { IoReload } from "react-icons/io5";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <span>MY</span>
        <span>PORTFOLIO</span>
      </div>
      <div className="portfolio-grid">
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
      </div>
      <button className="btn-load-more">
        Load More
        <IoReload size={18} />
      </button>
    </div>
  );
}

export default Portfolio;
