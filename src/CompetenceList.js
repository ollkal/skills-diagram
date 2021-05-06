import React from "react";
import CompetenceSlider from "./CompetenceSlider";
import "./CompetenceList.css";

const CompetenceList = ({ list, onChange }) => (
  <div className="CompetenceList">
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

export default CompetenceList;
