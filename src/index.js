import React from "react";
import ReactDOM from "react-dom";

const fname = "Nantin";
const lname = "Kapsali";
const luckyNumber = 4;

//string interpolation
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
    <p>Your lucky number with mathematical calculate is {2 * 2}</p>
    <p>
      Your lucky number with random generate is {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);
