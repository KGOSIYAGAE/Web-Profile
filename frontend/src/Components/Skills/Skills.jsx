import React from "react";
import "./Skills.css";
import { skills } from "../../utils/helper.js";

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex justify-center gap-3 text-7xl font-bold">
        <span>MY</span>
        <span className="text-blue-500">SKILLS</span>
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center justify-center bg-neutral-800 rounded-md shadow-md p-10 gap-2 transition-all hover:scale-95">
            <img src={skill.icon} alt="skill image" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
