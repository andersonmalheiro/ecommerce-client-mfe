import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LoginWrapper from "../components/LoginWrapper";
import RegisterWrapper from "../components/RegisterWrapper";

const AuthRouterOutlet = () => <Outlet />;

const AuthRouter = () => (
  <Routes>
    <Route path="" element={<AuthRouterOutlet />}>
      <Route path="login" element={<LoginWrapper />} />
      <Route path="register" element={<RegisterWrapper />} />
      <Route path="*" element={<h1>Not found...</h1>} />
    </Route>
  </Routes>
);

export default AuthRouter;
