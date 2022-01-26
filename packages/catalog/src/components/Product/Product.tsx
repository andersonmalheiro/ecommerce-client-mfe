import React from "react";
import { useLocation } from "react-router-dom";
import currency from "../../utils/currency";
import { Container, ProductImg, ProductMeta } from "./Product.styles";

export interface ProductProps {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}

const Product = (props: ProductProps) => {
  const { description, image, name, price, id } = props;
  const location = useLocation();

  console.log(location);

  return (
    <Container
      to={`${location.pathname === "/" ? "" : location.pathname}/product/${id}`}
    >
      <ProductImg src={image} alt={name} />

      <ProductMeta>
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>{currency.format(price)}</strong>
      </ProductMeta>
    </Container>
  );
};

export default Product;
