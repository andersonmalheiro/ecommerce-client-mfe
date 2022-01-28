import React from "react";
import {
  Container,
  GoBackBtn,
  DetailsCard,
  DetailsContainer,
  ProductImg,
  ProductImgContainer,
  ProductPrice,
  ProductName,
  ProductDescription,
} from "./ProductDetails.styles";
import { useParams, Link, useLocation } from "react-router-dom";
import { ProductProps } from "../../components/Product/Product";
import currency from "../../utils/currency";
import { randomId } from "../../utils/random";

const ProductDetails = () => {
  const { productId } = useParams();
  const location = useLocation();

  const product: ProductProps = {
    description: "Product description",
    id: randomId(),
    image: `https://picsum.photos/200?random=1`,
    name: `Product ${Math.random().toString(36).substring(2)}`,
    price: Number((Math.random() * 1000).toFixed(2)),
    category_name: "Category name",
    vendor_name: "Vendor name",
  };

  return (
    <Container>
      <h1>Product details</h1>
      <GoBackBtn to={location.pathname === "/catalog" ? "/catalog" : "/"}>
        Go back
      </GoBackBtn>

      <DetailsCard>
        <ProductImgContainer>
          <ProductImg src={product.image} alt={product.name} />
        </ProductImgContainer>

        <DetailsContainer>
          <section>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{currency.format(product.price)}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
          </section>

          <section>
            <div>
              <strong>Category: </strong>
              <span>{product.category_name}</span>
            </div>
            <div>
              <strong>Vendor: </strong>
              <span>{product.vendor_name}</span>
            </div>
          </section>
        </DetailsContainer>
      </DetailsCard>
    </Container>
  );
};

export default ProductDetails;
