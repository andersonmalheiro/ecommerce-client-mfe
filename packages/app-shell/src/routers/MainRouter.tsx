import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CatalogWrapper from '../components/CatalogWrapper';
import AuthRouter from './AuthRouter';

const MainRouter = () => (
  <Routes>
    <Route index element={<Navigate to="catalog" />} />
    <Route path="/catalog/*" element={<CatalogWrapper />} />
    <Route path="/auth/*" element={<AuthRouter />} />
    <Route path="*" element={<h1>Not found...</h1>} />
  </Routes>
);

export default MainRouter;
