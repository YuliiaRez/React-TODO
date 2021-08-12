import React from "react";
import s from "../TodoPage.module.scss";

function TasksList({ todo, setTodo }) {
  function deleteTask(id) {
    let newtodo = [...todo].filter((item) => item.id !== id);
    setTodo(newtodo);
  }
  function isDoneStatus(id) {
    let newtodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }

      return item;
    });

    setTodo(newtodo);
  }
  console.log(`todo`, todo);
  return (
    <ol className={s.tasksList}>
      {todo.map((item) => (
        <li key={item.id}>
          <div className={s.body}>{item.body}</div>
          <div className={s.buttons}>
            <button
              onClick={() => {
                deleteTask(item.id);
              }}
            >
              Del
            </button>
            <button
              disabled={item.status}
              onClick={() => {
                isDoneStatus(item.id);
              }}
            >
              Done
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default TasksList;
