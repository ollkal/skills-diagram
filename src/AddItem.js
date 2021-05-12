import React from "react";
import Button from "@material-ui/core/Button";

export const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input
      type="text"
      placeholder="New skill"
      value={name}
      onChange={onChange}
    />

    <Button variant="contained" color="primary" onClick={onAdd}>
      Add
    </Button>
  </div>
);
