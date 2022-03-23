import React from "react";
import { Link } from "react-router-dom";
import AddTodo from "../AddTodo/AddTodo";
import ToDoList from "../TodoList/ToDoList";

const Home = () => {
  return (
    <div>
      <AddTodo />
      <ToDoList />
    </div>
  );
};

export default Home;
