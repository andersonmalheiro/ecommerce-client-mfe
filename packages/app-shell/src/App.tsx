import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import MainRouter from "./routers/MainRouter";

import("shared_components/styles.css");

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
      <ToastContainer />
    </CookiesProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
