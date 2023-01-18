import React from "react";

const Task = ({ task }) => {
  return (
    <div className="task__single ">
      <input type="radio" />
      <div className="task__content">
        <p>{task.title}</p>
        <p>Today</p>
      </div>
    </div>
  );
};

export default Task;
