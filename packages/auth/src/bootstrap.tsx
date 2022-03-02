import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';
import AuthContextProvider from './context/AuthContext';
import './index.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Me from './pages/Profile/Me';
import Register from './pages/Register';

const App = () => (
  <AuthContextProvider>
    <BrowserRouter>
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
    </BrowserRouter>
    <ToastContainer />
  </AuthContextProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
