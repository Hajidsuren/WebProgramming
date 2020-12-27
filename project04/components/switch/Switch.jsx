import React, { useState } from "react";
import Example from "../example/Example";
import States from "../states/States";
import "./Switch.css";
function Switch(props) {
  const [name, setName] = useState("Example");
  const [button, setButton] = useState("switch");
  const clickHandler = () => {
    if (name === "Example") {
      setName("States");
      setButton("states");
    } else {
      setName("Example");
      setButton("example");
    }
  };
  return (
    <div className={name === "Example" ? "container" : "con"}>
      <div className="btn" onClick={clickHandler}>
        {button}
      </div>
      {name === "Example" ? <Example /> : <States />}
    </div>
  );
}

export default Switch;
