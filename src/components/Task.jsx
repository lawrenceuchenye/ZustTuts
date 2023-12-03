import "./Task.css";
import { useState } from "react";

const Task = ({ title, status }) => {
  return (
    <div className={`task ${status}`}>
      <h1>{title}</h1>
      <h1>-- {status}</h1>
    </div>
  );
};

export default Task;
