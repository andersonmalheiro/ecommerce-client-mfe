import React from "react";
import { useCookies } from "react-cookie";
import { IHeaderProps } from "shared-types";
import Product, { ProductProps } from "../../components/Product";
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

  const products: ProductProps[] = [
    {
      description: "Best fidget spinner in the world",
      id: Math.random(),
      image:
        "https://a-static.mlcdn.com.br/1500x1500/fidget-spinner-original-vermelho-candide/candide/2601vm/a0414dc9512474e5f4b29c75d2802880.jpg",
      name: "Fidged spinner vermelho",
      price: 11.99,
    },
  ];

  return (
    <ErrorBoundary errorMessage="Components service unavailable">
      <React.Suspense fallback={<Fallback />}>
        <Header title="MF Home" />
      </React.Suspense>

      <div
        style={{
          height: "calc(100vh - 100px - 2em)",
          padding: "1em",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>

      <React.Suspense fallback={<Fallback />}>
        <Footer />
      </React.Suspense>
    </ErrorBoundary>
  );
}
