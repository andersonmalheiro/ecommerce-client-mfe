import React from "react";
import RemoteComponentWrapper from "../RemoteComponentWrapper";

const Catalog = React.lazy(() => import("catalog_mf/Main"));
const Header = React.lazy(() => import("shared_components/Header"));
const Footer = React.lazy(() => import("shared_components/Footer"));

const CatalogWrapper = () => {
  document.title = "MF - Catalog";

  return (
    <>
      <RemoteComponentWrapper message="header not available">
        <Header title="MF App" />
      </RemoteComponentWrapper>

      <RemoteComponentWrapper message="auth service not available">
        <div
          style={{
            height: "calc(100vh - 100px)",
          }}
        >
          <Catalog />
        </div>
      </RemoteComponentWrapper>

      <RemoteComponentWrapper message="footer not available">
        <Footer />
      </RemoteComponentWrapper>
    </>
  );
};

export default CatalogWrapper;
