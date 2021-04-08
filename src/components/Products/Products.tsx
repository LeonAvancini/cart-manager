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

const TestContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  height: 30px;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
`;

interface ProductsProps {
  products: Product[];
  productId: (id: number) => void;
}
const Products = ({ products, productId }: ProductsProps) => {
  const total = (products: Product[]) => {
    return products.reduce((sum, i) => {
      return sum + i.price * i.quantity;
    }, 0);
  };

  const totalValue = total(products);

  return (
    <Container>
      <TestContainer>
        <DescriptionContainer>Name</DescriptionContainer>
        <DescriptionContainer>$</DescriptionContainer>
        <DescriptionContainer>Q</DescriptionContainer>
        <DescriptionContainer>SubT</DescriptionContainer>
      </TestContainer>
      {products.map((product, i) => {
        return (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            clickHandler={() => {
              productId(i);
            }}
          />
        );
      })}
      {totalValue > 0 && (
        <TotalPriceContainer>Total:{totalValue}</TotalPriceContainer>
      )}
    </Container>
  );
};

export default Products;
