import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MainRouter from "./routes";

const App = () => (
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
