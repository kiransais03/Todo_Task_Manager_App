import React, { useState } from "react";
import Task from "./Task";

function TaskDisplay({ dispatch, taskarr }) {
  return (
    <div>
      {taskarr.map((taskObj, index) => {
        return <Task key={index} dispatch={dispatch} taskObj={taskObj} />;
      })}
    </div>
  );
}

export default TaskDisplay;
