import React from "react";
import FiltersPanel from "../../components/Filters/FiltersPanel";
import Product, { ProductProps } from "../../components/Product";
import { randomId } from "../../utils/random";
import { Container, ProductList } from "./Catalog.styles";


const Catalog: React.FC = ({ children, ...rest }) => {
  const [products, setProducts] = React.useState<Array<ProductProps>>(
    Array.from({ length: 20 }).map((_, index) => ({
      description: "Product description",
      id: randomId(),
      image: `https://picsum.photos/200?random=${index + 1}`,
      name: `Product ${Math.random().toString(36).substring(2)}`,
      price: Number((Math.random() * 1000).toFixed(2)),
    }))
  );

  return (
    <Container {...rest}>
      <FiltersPanel />

      <ProductList>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductList>
    </Container>
  );
};

export default Catalog;
