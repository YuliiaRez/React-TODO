import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import s from "../TodoPage.module.scss";
import TODO_SCHEMA from "../../utils/validatingSchema";
function AddTask({ todo, setTodo }) {
  const [newTask, setNewTask] = useState(() => "");

  //   const createTask = () => {
  //     if (newTask) {
  //       setTodo([...todo, { id: Date.now(), body: newTask, status: false }]);
  //     }
  //   };
  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      status: false,
    };
    if (values.body) {
      setTodo([...todo, newTask]);
    }
    formikBag.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ body: "" }}
        onSubmit={addTask}
        validationSchema={TODO_SCHEMA}
      >
        {(formikProps) => (
          <Form>
            <Field type="text" name="body" placeholder="Enter task" />
            <button type="submit">Save</button>
            <br />
            <ErrorMessage name="body" component="h5" />
          </Form>
        )}
      </Formik>
      {/* 
      <input
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={createTask}>Save</button> */}
    </div>
  );
}

export default AddTask;
