import React from "react";
import "./Skills.css";
import { skills } from "../../utils/helper.js";

function Skills() {
  return (
    <div className="skills">
      <div className="skill-titles">
        <span>MY</span>
        <span>SKILLS</span>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="grid-box">
            <img src={skill.icon} alt="skill-img" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
