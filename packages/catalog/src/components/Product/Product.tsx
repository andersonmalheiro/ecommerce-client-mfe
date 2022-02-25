import React from "react";
import { useLocation } from "react-router-dom";
import ProductIcon from "../../assets/product-icon.png";
import currency from "../../utils/currency";
import { Container, ProductImg, ProductMeta } from "./Product.styles";

export interface ProductProps {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  category_name?: string;
  vendor_name?: string;
}

const Product = (props: ProductProps) => {
  const { description, image, name, price, id } = props;
  const location = useLocation();

  const dragListener = (event: React.DragEvent) => {
    const dt = event.dataTransfer;

    const image = new Image(50, 50);
    image.src = ProductIcon;

    dt.setDragImage(image, 25, 25);
    dt.setData("text/plain", `product_id:${String(id)}`);
  };

  return (
    <Container
      to={`${location.pathname === "/" ? "" : location.pathname}/product/${id}`}
      draggable
      onDragStart={dragListener}
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
