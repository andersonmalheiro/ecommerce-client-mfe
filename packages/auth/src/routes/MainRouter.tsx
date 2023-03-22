import React from 'react';
import Login from '@pages/Login';
import Profile from '@pages/Profile';
import Me from '@pages/Profile/Me';
import Register from '@pages/Register';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainRouter = () => (
  <Routes>
    <Route index element={<Login registerLink="/register" />} />
    <Route path="/register" element={<Register loginLink="/" />} />
    <Route path="profile" element={<Profile />}>
      <Route index element={<Navigate to="me" />} />
      <Route path="me" element={<Me />} />
    </Route>
  </Routes>
);

export default MainRouter;
