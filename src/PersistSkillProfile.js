import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export const PersistSkillProfile = ({ onSubmit, disabled }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    onSubmit();
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
      <h3>4. Save skill profile</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          disabled={disabled}
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
        <DialogTitle id="alert-dialog-title">{"Great work"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your skills profile have now been generated. Have a good day.
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
