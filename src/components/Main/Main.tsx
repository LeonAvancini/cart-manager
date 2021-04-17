import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Products from "../Products/Products";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightgrey;
`;

const Title = styled.div`
  font-family: "Staatliches", cursive;
  font-size: 20px;
  padding: 10px 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ButtonStyled = styled.button<{ propColor: string }>`
  margin: 10px;
  border: 2px solid ${(p) => p.propColor};
  border-radius: 5px;
  padding: 5px;
  &:first-child {
    margin-left: 0px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const FormContainer1 = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const InputStyled = styled.input`
  padding: 5px;
  font-size: 15px;
  margin: 2px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshList, setRefreshList] = useState(false);
  const [canClearCart, setCanClearCart] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      setProducts(JSON.parse(localStorage.getItem("products") || ""));
      setRefreshList(false);
      setCanClearCart(true);
    } else {
      setProducts([]);
      setRefreshList(false);
    }
  }, [refreshList]);

  interface ProductForm {
    productName: string;
    productPrice: number;
    productQuantity: number;
  }
  const onSubmit = (data: ProductForm) => {
    const productsList: Product[] = products;
    try {
      if (!data.productName) {
        return;
      }
      productsList.push({
        id: products.length + 1,
        name: data.productName,
        price: data.productPrice || 0,
        quantity: data.productQuantity || 1,
      });
      localStorage.setItem("products", JSON.stringify(productsList));
      checkList(products);
    } catch (e) {
      console.log(e);
    } finally {
      reset();
    }
  };

  const cleanCart = () => {
    localStorage.clear();
    setRefreshList(true);
    setCanClearCart(false);
  };

  const removeItem = (id: number) => {
    products.splice(id, 1);
    const productsList: Product[] = products;
    localStorage.setItem("products", JSON.stringify(productsList));
    checkList(products);
  };

  const checkList = (list: Product[]) => {
    if (list.length === 0) {
      setCanClearCart(false);
    }
    setRefreshList(true);
  };
  // Get item
  //const storage = () =>
  //console.log(JSON.parse(localStorage.getItem("tasks") || ""));
  // Remove Item
  // localStorage.removeItem('Key');

  //Clear all items of localstorage
  // localStorage.clear();

  return (
    <Container>
      <Title>Shopping cart Manager</Title>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormContainer1>
          <InputContainer>
            <InputStyled
              autoComplete="off"
              placeholder="* Product"
              maxLength={10}
              type="text"
              name="productName"
              autoFocus
              ref={register({ required: true })}
            />
          </InputContainer>
          <InputContainer>
            <InputStyled
              autoComplete="off"
              placeholder="Price"
              max="9999"
              type="number"
              min="0"
              name="productPrice"
              ref={register}
            />
          </InputContainer>
        </FormContainer1>
        <InputStyled
          autoComplete="off"
          placeholder="Quantity"
          type="number"
          min="0"
          max="9999"
          name="productQuantity"
          ref={register}
        />
        <ButtonsContainer>
          <ButtonStyled propColor={"green"} type="submit">
            Add to cart
          </ButtonStyled>
          {canClearCart && (
            <ButtonStyled propColor={"red"} onClick={() => cleanCart()}>
              Clean cart list
            </ButtonStyled>
          )}
        </ButtonsContainer>
      </FormContainer>
      <Products
        products={products}
        productId={(productId) => removeItem(productId)}
      />
    </Container>
  );
};

export default Main;
