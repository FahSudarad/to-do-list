import React from "react";
import { Input, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
  return (
    <form onSubmit={onAddFormSubmit} className="addForm">
      <Input
        type="text"
        name="todo"
        placeholder="Create a new todo"
        value={todo}
        onChange={onAddInputChange}
      />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        type="submit"
        color="primary" // เพิ่มสีเป็นสีหลักของ Material-UI
      >
        ADD
      </Button>
    </form>
  );
}

export default AddTodoForm;
