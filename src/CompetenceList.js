import React from "react";
import "./CompetenceList.css";
import CompetenceSlider from "./CompetenceSlider";

const CompetenceList = ({ skillList, onChange, disabled }) => (
  <div className="CompetenceList">
    <h3>2. Rate my skills</h3>
    {skillList.map((item) => (
      <CompetenceSlider
        key={item.skill}
        item={item}
        onChange={onChange}
        disabled={disabled}
      ></CompetenceSlider>
    ))}
  </div>
);

export default CompetenceList;
