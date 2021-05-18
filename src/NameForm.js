import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./NameForm.css";

const NameForm = ({ name, setName, profession, setProfession }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className="NameForm">
        <h3>1. Who are you</h3>
        <form className={classes.root} noValidate autoComplete="off">
          {/* <TextField
            id="outlined-basic"
            label="Name"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          /> */}

          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
            <Input
              id="input-with-icon-adornment"
              label="Name"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Primary profession
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <MenuItem value={"Frontend developer"}>
                Frontend developer
              </MenuItem>
              <MenuItem value={"Backend developer"}>Backend developer</MenuItem>
              <MenuItem value={"Fullstack developer"}>
                Fullstack developer
              </MenuItem>
              <MenuItem value={"UX"}>UX</MenuItem>
              <MenuItem value={"Agile coach"}>Agile coach</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    </>
  );
};

export default NameForm;
