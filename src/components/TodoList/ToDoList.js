import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";

const ToDoList = () => {
  const { todos, getTodosData, changeStatus, deleteTask, editTodo } =
    useContext(todoContext);
  useEffect(() => {
    console.log("useEffect");
    getTodosData();
  }, []);
  return (
    <div>
      {todos.map((item) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          <input
            type="checkbox"
            checked={item.status}
            onChange={() => changeStatus(item.id)}
          />
          {item.task}
          <button onClick={() => deleteTask(item.id)}>Delete</button>
          <Link to="/edit">
            <button onClick={() => editTodo(item.id)}>Edit</button>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
