import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
} from "./feature/taskSlice";

import { useState } from "react";

import "./index.css";

export default function App() {
  const [taskNameInput, setTaskNameInput] =
    useState("");

  const tasks = useSelector(
    (state) => state.tasks
  );

  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!taskNameInput.trim()) {
      alert("Please enter a task!");
      return;
    }

    dispatch(
      addTask({
        id: Date.now(),
        name: taskNameInput,
      })
    );

    setTaskNameInput("");
  };

  const handleClearList = () => {
    tasks.forEach((task) => {
      dispatch(deleteTask(task.id));
    });
  };

  return (
    <div className="main-container">

      <div className="task-card">

        <h1>Task Manager</h1>

        <form
          onSubmit={handleAddTask}
          className="input-section"
        >
          <input
            type="text"
            placeholder="Enter Task"
            value={taskNameInput}
            onChange={(e) =>
              setTaskNameInput(e.target.value)
            }
          />

          <button type="submit">
            Add
          </button>
        </form>

        <div className="clear-wrapper">
          <span onClick={handleClearList}>
            Clear list
          </span>
        </div>

        <div className="task-container">

          {tasks.length === 0 ? (
            <p className="no-task">
              No Task
            </p>
          ) : (
            <>
              <h2>Ongoing Task</h2>

              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="task-item"
                >
                  <div className="task-name">
                    {task.name}
                  </div>

                  <button
                    className="checkbox"
                    onClick={() =>
                      dispatch(deleteTask(task.id))
                    }
                  ></button>

                </div>
              ))}
            </>
          )}

        </div>

      </div>

    </div>
  );
}