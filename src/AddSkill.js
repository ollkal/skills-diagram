import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const AddSkill = ({ name, setSkillName, onAdd }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "41%",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <h3>3. Add new skill</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Skill"
          value={name}
          onChange={setSkillName}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={onAdd}
          disabled={!!!name}
        >
          Add
        </Button>
      </form>
    </div>
  );
};
