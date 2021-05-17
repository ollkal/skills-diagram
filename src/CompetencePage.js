import React from "react";
import { Radar } from "react-chartjs-2";
import "./CompetencePage.css";
import CompetenceList from "./CompetenceList";
import NameForm from "./NameForm";
import { initialList } from "./initialList";
import { AddItem } from "./AddItem";
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
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  const changeSkillLevel = (id) => (event, value) => {
    var newList = list.slice();

    for (var i in newList) {
      if (newList[i].skill === id) {
        newList[i].value = value;
        break;
      }
    }

    setList(newList);
  };

  const addSkill = () => {
    const newList = list.concat({ skill: name, value: 10 });

    setList(newList);
    setName("");
  };

  const removeSkill = (id) => {
    var newList = list.slice();

    for (var i in newList) {
      if (newList[i].skill === id) {
        newList.splice(i, 1);
        break;
      }
    }

    setList(newList);
  };

  const showRadar = () => {
    return list.filter((item) => item.value > 0).length > 2;
  };

  const prepdata = () => {
    let data = {
      labels: list.filter((item) => item.value > 0).map((a) => a.skill),
      datasets: [
        {
          label: "% of skills",
          data: list.filter((item) => item.value > 0).map((a) => a.value),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };

    return data;
  };

  return (
    <div className="CompetencePage">
      <div className="row">
        <div className="menu-column">
          <div className="menu-column-content">
            <NameForm></NameForm>
            <CompetenceList
              list={list}
              onChange={changeSkillLevel}
              onRemove={removeSkill}
            />
            <AddItem name={name} onChange={handleChange} onAdd={addSkill} />
          </div>
        </div>
        <div className="column">
          {!showRadar() && (
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

          <div className="radar-content ">
            {showRadar() && <Radar data={prepdata()} options={options} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencePage;
