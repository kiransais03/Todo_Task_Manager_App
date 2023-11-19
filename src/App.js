import "./styles.css";
import React, { useReducer, useState } from "react";
import TaskDisplay from "./TaskDisplay";
import InputBox from "./InputBox";

let intialData = [{ id: 1, text: "HI this is task", editing: false }];

export default function App() {
  let [currId, setCurrId] = useState(1);

  let [taskarr, dispatch] = useReducer(reducer, intialData);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_DATA":
        return [
          ...state,
          {
            id: currId,
            text: action.text,
            editing: false
          }
        ];
        break;

      case "EDIT_DATA":
        return state.map((task) => {
          if (task.id === action.id) {
            return action.obj;
          } else {
            return task;
          }
        });
        break;

      case "DELETE_DATA":
        return state.filter((task) => {
          if (task.id !== action.id) {
            return task;
          }
        });
        break;

      default:
        return state;
    }
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <InputBox dispatch={dispatch} currId={currId} setCurrId={setCurrId} />

      <TaskDisplay dispatch={dispatch} taskarr={taskarr} />
    </div>
  );
}
