import "./App.css";
import React, { useState } from "react";
import AddTask from "./TodoPage/AddTask/";
import TasksList from "./TodoPage/TasksList";
import s from "./TodoPage/TodoPage.module.scss";

function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      body: "Example task",
      status: false,
    },
  ]);

  return (
    <div className={s.todoContainer}>
      <AddTask todo={todo} setTodo={setTodo} />
      <TasksList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
