import React from "react";
import styled from "styled-components";

import { Product } from "../Main/Main";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;
const TotalPriceContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  width: 100%;
  heigth: 40px;
`;
const Price = styled.div`
  font-size: 20px;
`;
const TotalPriceTitle = styled.div`
  padding-bottom: 5px;
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
        <TotalPriceContainer>
          <TotalPriceTitle>Total Price</TotalPriceTitle>
          <Price>{totalValue}</Price>
        </TotalPriceContainer>
      )}
    </Container>
  );
};

export default Products;
