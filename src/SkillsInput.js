import React from "react";
import CompetenceSlider from "./CompetenceSlider"
import "./SkillsInput.css";

const SkillsInput = ({ list, onChange }) => (
  <div className="SkillsInput">
    <h3>Rate my skills</h3>
    {list.map((item) => (
      <CompetenceSlider
        key={item.skill}
        item={item}
        onChange={onChange}
      ></CompetenceSlider>
    ))}
  </div>
);

export default SkillsInput;
