import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

const App = () => (
  <div>
    <Header title="Components" />
    <div
      style={{
        height: "calc(100vh - 100px - 2em)",
        padding: "1em"
      }}
    >
      <div>Name: components</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
