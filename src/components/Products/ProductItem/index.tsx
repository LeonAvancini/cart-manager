import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid black;
  height: 30px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
  font-family: "Patrick Hand", cursive;
 
`;

interface ProductProps {
  name: string;
  price: number;
  quantity: number | 1;
  clickHandler: () => void;
}
const ProductItem = ({ name, price, quantity, clickHandler }: ProductProps) => {
  return (
    <Container onClick={clickHandler}>
      <DescriptionContainer>{name}</DescriptionContainer>
      <DescriptionContainer>${price}</DescriptionContainer>
      <DescriptionContainer>{quantity}</DescriptionContainer>
      <DescriptionContainer>${price * quantity ?? 1}</DescriptionContainer>
    </Container>
  );
};

export default ProductItem;
