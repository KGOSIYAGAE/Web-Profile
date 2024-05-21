import React, { useState } from "react";
import "./Portfolio.scss";
import { IoReload } from "react-icons/io5";
import { project_imgs } from "../../utils/helper.js";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <span>MY</span>
        <span>PORTFOLIO</span>
      </div>
      <div className="portfolio-grid">
        {project_imgs.map((project) => (
          <div className="project-card">
            <div className="card-info">
              <span>{project.name}</span>
              <span>{project.description}</span>
              <a href="http://" target="blank">
                Live Demo
              </a>
              <a href={project.code} target="blank">
                Code
              </a>
            </div>
            <img src={project.img} alt="" className="project-img" />
          </div>
        ))}
      </div>
      <button className="btn-load-more">
        Load More
        <IoReload size={18} />
      </button>
    </div>
  );
}

export default Portfolio;
