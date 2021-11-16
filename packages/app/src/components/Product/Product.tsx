import React from "react";
import currency from "../../utils/currency";
import styles from "./Product.module.css";

export interface ProductProps {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}

const Product = (props: ProductProps) => {
  const { description, image, name, price } = props;

  return (
    <div className={styles.productContainer}>
      <img className={styles.productImg} src={image} alt={name} />

      <div className={styles.productMeta}>
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>{currency.format(price)}</strong>
      </div>
    </div>
  );
};

export default Product;
