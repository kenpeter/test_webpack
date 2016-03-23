import React from "react";
import ReactDom from "react-dom";
import Greeting from "./greeting.js";

ReactDom.render(
  <Greeting name="bla"/>,
  document.getElementById('example')  
);
