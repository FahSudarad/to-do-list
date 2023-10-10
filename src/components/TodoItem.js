import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

function TodoItem({ todo, onEditClick, onDeleteClick, onCheckboxChange }) {
  const handleCheckboxChange = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    onCheckboxChange(updatedTodo);
  };

  return (
    <Paper elevation={3} className={todo.completed ? "completed" : ""}>
      <li key={todo.id}>
        <Checkbox
          checked={todo.completed}
          onChange={handleCheckboxChange}
          inputProps={{ "aria-label": "Checkbox demo" }} // ย้าย label ไปที่ inputProps
        />
        {todo.text}
        {!todo.completed && (
          <>
            <IconButton
              aria-label="delete"
              onClick={() => onDeleteClick(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={() => onEditClick(todo)}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </li>
    </Paper>
  );
}

export default TodoItem;
