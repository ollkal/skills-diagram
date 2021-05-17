import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const AddItem = ({ name, onChange, onAdd }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          onChange={onChange}
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

      <h3>4. Save skill profile</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={handleClickOpen}
        >
          Submit
        </Button>
      </form>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Results are transmitted to the moon"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Persistence layer is on my todo list. Better luck next time.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
