import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  return (<h1>Product details: {productId}</h1>)
};

export default ProductDetails;
