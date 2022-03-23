import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo/AddTodo";
import EditTodo from "./EditTodo/EditTodo";
import Home from "./Home/Home";
import ToDoList from "./TodoList/ToDoList";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddTodo />} />
        <Route exact path="/list" element={<ToDoList />} />
        <Route exact path="/edit" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
