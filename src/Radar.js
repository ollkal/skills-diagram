import React from "react";
import { Radar } from "react-chartjs-2";
import "./Radar.css";
import SkillsInput from "./SkillsInput";
import Button from "@material-ui/core/Button";

const initialList = [
  {
    skill: "Frontend",
    value: 70,
  },
  {
    skill: "Backend",
    value: 56,
  },
  {
    skill: "Cloud development",
    value: 56,
  },
  {
    skill: "Azure",
    value: 55,
  },
  {
    skill: "iOS/Andorid",
    value: 78,
  },
  {
    skill: "AWS",
    value: 30,
  },
  {
    skill: "Javascript",
    value: 44,
  },
  {
    skill: "CI/CD",
    value: 66,
  },

  {
    skill: "Agile",
    value: 70,
  },

  {
    skill: "Devops",
    value: 20,
  },
];

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Map of my skills",
    },
  },
};

const RadarChart = () => {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  const handleChanges = (id) => (event, value) => {
    console.log(id);
    console.log(value);
    console.log(event);

    var newList = list.slice();

    for (var i in newList) {
      if (newList[i].skill === id) {
        newList[i].value = value;
        break;
      }
    }

    setList(newList);
  };

  function handleAdd() {
    const newList = list.concat({ skill: name, value: 77 });

    setList(newList);

    setName("");
  }

  let prepdata = () => {
    let data = {
      labels: list.map((a) => a.skill),
      datasets: [
        {
          label: "% of skills",
          data: list.map((a) => a.value),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };

    return data;
  };

  return (
    <div className="Radar">
      <div className="row">
        <div className="menu-column">
          <SkillsInput list={list} onChange={handleChanges} />
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        </div>
        <div className="column">
          <Radar data={prepdata()} options={options} />
        </div>
      </div>
    </div>
  );
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input
      type="text"
      placeholder="Add skill"
      value={name}
      onChange={onChange}
    />
    <Button variant="contained" color="primary" onClick={onAdd}>
      Add
    </Button>
  </div>
);

export default RadarChart;
