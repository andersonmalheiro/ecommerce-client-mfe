import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login registerLink="/register" />} />
        <Route path="/register" element={<Register loginLink="/" />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
