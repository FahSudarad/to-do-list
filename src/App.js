import React, { useEffect, useState } from "react";
import EditForm from "./components/EditForm";
import AddTodoForm from "./components/AddtodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleCheckboxChange = (updatedTodo) => {
    const updatedTodos = todos.map((t) =>
      t.id === updatedTodo.id ? updatedTodo : t
    );
    setTodos(updatedTodos);
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: todo.trim(),
        completed: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTodo("");
    }
  };

  const handleDeleteClick = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleUpdateTodo = () => {
    const updatedItem = todos.map((t) =>
      t.id === currentTodo.id ? currentTodo : t
    );
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo();
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <h1>Todo App</h1>
        {isEditing ? (
          <EditForm
            currentTodo={currentTodo}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <AddTodoForm
            todo={todo}
            onAddFormSubmit={handleFormSubmit}
            onAddInputChange={handleInputChange}
          />
        )}
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
