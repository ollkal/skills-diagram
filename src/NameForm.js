import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./NameForm.css";

const NameForm = ({ name, setName }) => {
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
        <h3>1. Enter your name</h3>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Name"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
        </form>
      </div>
    </>
  );
};

export default NameForm;
