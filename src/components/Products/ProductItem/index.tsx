import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  height: 30px;
`;
const DeleteTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  color: blue;
  width: 30px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  width: 100%;
`;

interface ProductProps {
  name: string;
  price: number;
  quantity?: number;
}
const ProductItem = ({ name, price, quantity }: ProductProps) => {
  return (
    <Container>
      <DeleteTaskContainer>-</DeleteTaskContainer>
      <DescriptionContainer>{name}</DescriptionContainer>
      <DescriptionContainer>{price}</DescriptionContainer>
      <DescriptionContainer>{quantity}</DescriptionContainer>
    </Container>
  );
};

export default ProductItem;
