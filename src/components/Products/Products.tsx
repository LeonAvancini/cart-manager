import React from "react";
import styled from "styled-components";

import { Product } from "../Main/Main";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
  border: 2px solid red;
  background-color: white;
`;
const TotalPriceContainer = styled.div`
  display: flex;
  width: 100%;
  heigth: 40px;
  border: 2px solid blue;
`;
interface ProductsProps {
  products: Product[];
}
const Products = ({ products }: ProductsProps) => {
  return (
    <Container>
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        );
      })}
      <TotalPriceContainer>Total:</TotalPriceContainer>
    </Container>
  );
};

export default Products;
