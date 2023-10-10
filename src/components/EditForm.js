import React from "react";
import { Button, IconButton, Input } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form onSubmit={onEditFormSubmit} className="editForm">
      <label htmlFor="editTodo">
        <b>Edit todo:</b>&nbsp;{" "}
      </label>
      <Input
        type="text"
        name="editTodo"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />

      <IconButton type="submit" aria-label="update">
        <Button variant="contained" color="primary">
          Update
        </Button>
      </IconButton>

      <IconButton aria-label="cancel" onClick={() => setIsEditing(false)}>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </IconButton>
    </form>
  );
}

export default EditForm;
