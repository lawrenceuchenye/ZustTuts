import "./Column.css";
import Task from "./Task";
import { useStore } from "../store/";
import { shallow } from "zustand/shallow";

const Column = ({ state }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.status == state),
    shallow,
  );

  return (
    <div className="column">
      <h1>{state}</h1>
      {tasks.map((task) => (
        <Task title={task.title} status={task.status} key={task.title} />
      ))}
      <p>tap task to delete</p>
    </div>
  );
};

export default Column;
