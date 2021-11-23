import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthRouter from "./AuthRouter";

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/auth/*" element={<AuthRouter />} />
  </Routes>
);

export default MainRouter;
