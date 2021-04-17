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
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  width: 100%;
  heigth: 40px;
`;

const Price = styled.div`
  font-size: 20px;
  justify-content: center;
  font-family: "Patrick Hand", cursive;
  color: red;
`;

const TotalPriceTitle = styled.div`
  font-family: "Patrick Hand", cursive;
  font-size: 20px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 10px;
  width: 100%;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: gray;
  border: 1px solid black;
  height: 30px;
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
      <TableContainer>
        <SubTitle>product</SubTitle>
        <SubTitle>price</SubTitle>
        <SubTitle>quantity</SubTitle>
        <SubTitle>subtotal</SubTitle>
      </TableContainer>
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
      {totalValue <= 0 && (
        <TotalPriceContainer>
          <TotalPriceTitle>Insert a product to show on the list</TotalPriceTitle>
        </TotalPriceContainer>
      )}
      {totalValue > 0 && (
        <TotalPriceContainer>
          <TotalPriceTitle>Total Price=</TotalPriceTitle>
          <Price>{` $${totalValue}`}</Price>
        </TotalPriceContainer>
      )}
    </Container>
  );
};

export default Products;
