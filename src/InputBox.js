import React, { useState } from "react";

function InputBox({ dispatch, currId, setCurrId }) {
  let [inputtext, setInputtext] = useState("");

  const handleAdd = () => {
    dispatch({
      type: "ADD_DATA",
      id: currId,
      text: inputtext
    });
    setCurrId((currId) => currId + 1);
    setInputtext("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task here"
        value={inputtext}
        onChange={(e) => {
          setInputtext(e.target.value);
        }}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default InputBox;
