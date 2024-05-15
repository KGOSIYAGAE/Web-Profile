import React from "react";
import "./About.css";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <span>ABOUT</span>
        <span>ME</span>
      </div>
      <div className="about-info">
        <div className="left">
          <div className="img-container">
            <img src="../public/sticker-peace.webp" alt="" className="img-sticker" />
          </div>
        </div>

        <div className="right">
          <span>PERSONAL INFO</span>
          <p>
            A Front-End Web Developer. I Spend My Whole Day Thinking Code, Practically Everyday Expanding My Skillset, I Love Getting My Hands On Projects That Looks Complex To Me And Its Fun Been
            Able To Complete It At The End. I Have Experience With JavaScript, HTML, CSS, GIT And Github. I've Built Different Projects And UI Landing Pages With Them. I'm Interested In All Things
            Tech And Currently Expanding My Knowledge And Skillset. I'm Currently Open Up To Work And Interships.
          </p>
          <button className="btn-download">
            Download CV
            <FaDownload className="download-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
