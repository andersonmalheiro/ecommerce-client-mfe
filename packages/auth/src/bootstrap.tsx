import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './context/AuthContext';
import './index.css';
import MainRouter from './routes';

const App = () => (
  <AuthContextProvider>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
    <ToastContainer />
  </AuthContextProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
