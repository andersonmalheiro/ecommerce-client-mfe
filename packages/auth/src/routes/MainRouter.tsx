import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Me from '../pages/Profile/Me';
import Register from '../pages/Register';

const MainRouter = () => (
  <Routes>
    <Route index element={<Login registerLink="/register" />} />
    <Route path="/register" element={<Register loginLink="/" />} />
    <Route
      path="profile"
      element={
        <RequireAuth>
          <Profile />
        </RequireAuth>
      }
    >
      <Route index element={<Navigate to="me" />} />
      <Route
        path="me"
        element={
          <RequireAuth>
            <Me />
          </RequireAuth>
        }
      />
    </Route>
  </Routes>
);

export default MainRouter;
