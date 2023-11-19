// TodoList.tsx
import React, { useState, KeyboardEvent } from "react";
import "./TodoList.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const deleteCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const handleFilterChange = () => {
    setShowCompleted(!showCompleted);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="add-todo-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="filter-container">
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={handleFilterChange}
          />
          Show Completed
        </label>
        <button onClick={deleteCompleted}>Delete Completed</button>
      </div>
      <ul className="todo-items">
        {todos
          .filter((todo) => (showCompleted ? true : !todo.completed))
          .map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
              <button onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
