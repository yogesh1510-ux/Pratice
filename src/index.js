import React from "react";
import ReactDOM from "react-dom";

const fname = "yogesh";
const lname = "Naikwadi";

ReactDOM.render(
  <div>
    <h1>hello my name is {fname + " " + lname} </h1>
    <p1>this is paragraph</p1>
  </div>,

  document.getElementById("root")
);
