import React, { useState } from "react";
import "./Portfolio.scss";
import { IoReload } from "react-icons/io5";
import { projectList } from "../../utils/helper.js";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <span>MY</span>
        <span>PORTFOLIO</span>
      </div>
      <div className="portfolio-grid">
        {projectList.map((project) => (
          <div className="project-card">
            <div className="card-info">
              <span>{project.title}</span>
              <span>{project.description}</span>
              <a href="http://" target="blank">
                Live Demo
              </a>
              <a href={project.codeUrl} target="blank">
                Code
              </a>
            </div>
            <img src={project.img} alt="" className="project-img" />
          </div>
        ))}
      </div>
      <button className="btn-load-more">
        <a href="https://github.com/KGOSIYAGAE?tab=repositories" target="_blank" rel="noopener noreferrer">
          Load More
          <IoReload size={18} />
        </a>
      </button>
    </div>
  );
}

export default Portfolio;
