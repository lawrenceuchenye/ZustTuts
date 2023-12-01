import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  return (
    <div className="column">
      <h1>{state}</h1>
      <Task title="Clean" />
    </div>
  );
};

export default Column;
