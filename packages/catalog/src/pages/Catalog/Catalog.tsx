import React from "react";
import Product, { ProductProps } from "../../components/Product";
import { Container } from "./Catalog.styles";

const Catalog: React.FC = ({children, ...rest}) => {
  const randomId = () => Math.floor(Math.random() * 10000);
  const [products, setProducts] = React.useState<Array<ProductProps>>([
    {
      description: "Best fidget spinner in the world",
      id: randomId(),
      image:
        "https://a-static.mlcdn.com.br/1500x1500/fidget-spinner-original-vermelho-candide/candide/2601vm/a0414dc9512474e5f4b29c75d2802880.jpg",
      name: "Fidged spinner vermelho",
      price: 11.99,
    },
    {
      description: "Best fidget spinner in the world",
      id: randomId(),
      image:
        "https://a-static.mlcdn.com.br/1500x1500/fidget-spinner-original-vermelho-candide/candide/2601vm/a0414dc9512474e5f4b29c75d2802880.jpg",
      name: "Fidged spinner vermelho",
      price: 11.99,
    },
    {
      description: "Best fidget spinner in the world",
      id: randomId(),
      image:
        "https://a-static.mlcdn.com.br/1500x1500/fidget-spinner-original-vermelho-candide/candide/2601vm/a0414dc9512474e5f4b29c75d2802880.jpg",
      name: "Fidged spinner vermelho",
      price: 11.99,
    },
    {
      description: "Best fidget spinner in the world",
      id: randomId(),
      image:
        "https://a-static.mlcdn.com.br/1500x1500/fidget-spinner-original-vermelho-candide/candide/2601vm/a0414dc9512474e5f4b29c75d2802880.jpg",
      name: "Fidged spinner vermelho",
      price: 11.99,
    },
  ]);

  return (
    <Container {...rest}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Container>
  );
};

export default Catalog;
