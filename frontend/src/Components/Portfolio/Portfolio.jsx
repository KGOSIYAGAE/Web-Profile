import React, { useState } from "react";
import { IoReload } from "react-icons/io5";
import { projectList } from "../../utils/helper.js";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10 p-10">
      <div className="flex justify-center gap-3 text-7xl font-bold">
        <span className="text-blue-500">MY</span>
        <span>PORTFOLIO</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5">
        {projectList.map((project) => (
          <div className="max-w-[400px] md:max-w-[500px]  bg-neutral-800 rounded-md shadow-sm hover:scale-105 transition-all">
            <img src={project.img} alt="" className="transition-all rounded-tr-md rounded-tl-md" />

            <div className="flex flex-col items-center gap-2 p-5">
              <span>{project.title}</span>
              <span>{project.description}</span>
              <a href="http://" target="blank" className="hover:text-blue-500">
                Live Demo
              </a>
              <a href={project.codeUrl} target="blank" className="hover:text-blue-500">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="flex gap-3 items-center justify-center w-[150px] bg-blue-500 p-3 rounded-3xl mt-2 hover:bg-blue-600">
        <a href="https://github.com/KGOSIYAGAE?tab=repositories" target="_blank" rel="noopener noreferrer">
          Load More
        </a>
        <IoReload />
      </button>
    </div>
  );
}

export default Portfolio;

/*
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
*/
