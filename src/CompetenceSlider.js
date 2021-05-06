import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./CompetenceSlider.css";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const CompetenceSlider = ({ item, onChange }) => {
  const classes = useStyles();

  return (
    <div className="CompetenceSlider" key={item.skill}>
      <Typography id="discrete-slider-small-steps">{item.skill}</Typography>
      <Slider
        id={item.skill}
        defaultValue={10}
        value={item.value}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        marks
        step={5}
        min={0}
        max={100}
        onChange={onChange(item.skill)}
      ></Slider>
    </div>
  );
};

export default CompetenceSlider;
