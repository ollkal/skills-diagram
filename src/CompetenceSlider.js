import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import "./CompetenceSlider.css";

const CompetenceSlider = ({ item, onChange }) => {
  const [sliderValue, setSliderValue] = React.useState(item.value);

  function handleSliderChange(e, value) {
    setSliderValue(value);
  }

  const marks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  return (
    <div className="CompetenceSlider" key={item.skill}>
      <Typography>{item.skill}</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </Typography>
      <Slider
        id={item.skill}
        defaultValue={0}
        value={sliderValue}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        marks={marks}
        
        min={0}
        max={100}
        onChangeCommitted={onChange(item.skill)}
        onChange={handleSliderChange}
      ></Slider>
    </div>
  );
};

export default CompetenceSlider;
