import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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

export const mountCatalog = (element: HTMLElement) =>
  ReactDOM.render(
    <>
      <BrowserRouter>
        <CatalogRouter />
      </BrowserRouter>
    </>,
    element
  );

export default CatalogRouter;
