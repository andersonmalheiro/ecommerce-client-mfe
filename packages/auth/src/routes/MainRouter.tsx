import React from 'react';
import Login from '@pages/Login';
import Profile from '@pages/Management';
import Me from '@pages/Management/Profile';
import Register from '@pages/Register';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainRouter = () => (
  <Routes>
    <Route index element={<Login registerLink="/register" />} />
    <Route path="/register" element={<Register loginLink="/" />} />
    <Route path="management" element={<Profile />}>
      <Route index element={<Me />} />
    </Route>
  </Routes>
);

export default MainRouter;
