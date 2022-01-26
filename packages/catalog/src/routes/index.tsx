import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Catalog from "../pages/Catalog";
import ProductDetails from "../pages/ProductDetails";

const CatalogOutlet = () => <Outlet />;

const CatalogRouter = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="" element={<CatalogOutlet />}>
        <Route index element={<Catalog />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default CatalogRouter;
