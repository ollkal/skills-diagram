import React from "react";
import { Radar } from "react-chartjs-2";
import "./CompetencePage.css";
import CompetenceList from "./CompetenceList";
import NameForm from "./NameForm";
import { initialList } from "./initialList";
import { AddSkill } from "./AddSkill";
import { PersistSkillProfile } from "./PersistSkillProfile";
import logo from "./alphadev-logo.png";

const options = {
  scale: {
    ticks: { beginAtZero: true },
    min: 0,
    max: 100,
  },
  responsive: true,
};

const CompetencePage = () => {
  const [skillList, setSkillList] = React.useState(initialList);
  const [skill, setSkill] = React.useState("");
  const [name, setName] = React.useState("");

  function setSkillName(event) {
    setSkill(event.target.value);
  }

  const changeSkillLevel = (id) => (event, value) => {
    var newSkillList = skillList.slice();

    for (var i in newSkillList) {
      if (newSkillList[i].skill === id) {
        newSkillList[i].value = value;
        break;
      }
    }

    setSkillList(newSkillList);
  };

  const addSkill = () => {
    const newSkillList = skillList.concat({ skill: skill, value: 10 });

    setSkillList(newSkillList);
    setSkill("");
  };

  const onSubmit = () => {
    download(
      JSON.stringify(skillList, null, "\t"),
      "profile.json",
      "application/json"
    );
  };

  const download = (content, fileName, contentType) => {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  const showChart = () => {
    return skillList.filter((item) => item.value > 0).length > 2 && name;
  };

  const prepareChartData = () => {
    return {
      labels: skillList.filter((item) => item.value > 0).map((a) => a.skill),
      datasets: [
        {
          label: "% of skills",
          data: skillList.filter((item) => item.value > 0).map((a) => a.value),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };
  };

  return (
    <div className="CompetencePage">
      <div className="row">
        <div className="menu-column">
          <div className="menu-column-content">
            <NameForm name={name} setName={setName}></NameForm>
            <CompetenceList
              skillList={skillList}
              onChange={changeSkillLevel}
              disabled={!!!name}
            />
            <AddSkill
              name={skill}
              setSkillName={setSkillName}
              onAdd={addSkill}
              onSubmit={onSubmit}
            />
            <PersistSkillProfile onSubmit={onSubmit} disabled={!showChart()} />
          </div>
        </div>
        <div className="column">
          {!showChart() && (
            <div className="logo-container">
              <div className="logo-content">
                <img className="logo-image" src={logo} alt=""></img>
              </div>
              <div className="logo-content">
                Start create your skills profile, by estimating your competence
                to the left
              </div>
            </div>
          )}

          <div className="radar-content">
            {showChart() && (
              <Radar data={prepareChartData()} options={options} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencePage;
