import React from "react";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-5">
      <div className="flex justify-center gap-3 text-7xl font-bold">
        <span>ABOUT</span>
        <span className="text-blue-500">ME</span>
      </div>
      <div className="grid items-center justify-center gap-2 md:grid-cols-2">
        <div className="flex justify-center">
          <img src="../public/sticker-peace.webp" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-bold">PERSONAL INFO</h4>
          <p>
            A Front-End Web Developer. I Spend My Whole Day Thinking Code, Practically Everyday Expanding My Skillset, I Love Getting My Hands On Projects That Looks Complex To Me And Its Fun Been
            Able To Complete It At The End. I Have Experience With JavaScript, HTML, CSS, GIT And Github. I've Built Different Projects And UI Landing Pages With Them. I'm Interested In All Things
            Tech And Currently Expanding My Knowledge And Skillset. I'm Currently Open Up To Work And Interships.
          </p>
          <button className="flex gap-3 items-center w-[150px] bg-blue-500 p-3 rounded-3xl mt-2 hover:bg-blue-600">
            Download CV
            <FaDownload className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
