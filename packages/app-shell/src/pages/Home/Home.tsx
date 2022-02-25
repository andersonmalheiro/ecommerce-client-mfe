import React from "react";
import { useCookies } from "react-cookie";
import { IHeaderProps } from "shared-types";
import ErrorBoundary from "../../error-boundary";
import Fallback from "../../fallback";

const Header = React.lazy(
  () => import("shared_components/Header")
) as React.FC<IHeaderProps>;

const Footer = React.lazy(() => import("shared_components/Footer"));

export default function Home() {
  document.title = "MF - Home";

  const [cookies] = useCookies();

  React.useEffect(() => {
    console.log("home cookies ->", cookies);
  }, [cookies]);

  return (
    <ErrorBoundary errorMessage="Components service unavailable">
      <React.Suspense fallback={<Fallback />}>
        <Header title="MF Home" />
      </React.Suspense>

      <h1>Home</h1>

      <React.Suspense fallback={<Fallback />}>
        <Footer />
      </React.Suspense>
    </ErrorBoundary>
  );
}