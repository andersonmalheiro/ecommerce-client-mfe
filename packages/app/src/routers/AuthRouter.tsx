import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginWrapper from "../components/LoginWrapper";
import RegisterWrapper from "../components/RegisterWrapper";

const AuthRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="login" element={<LoginWrapper />} />
    <Route path="register" element={<RegisterWrapper />} />
  </Routes>
);

export default AuthRouter;
