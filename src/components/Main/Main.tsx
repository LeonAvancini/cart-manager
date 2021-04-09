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
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
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

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshList, setRefreshList] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      setProducts(JSON.parse(localStorage.getItem("products") || ""));
      setRefreshList(false);
    } else {
      setProducts([]);
      setRefreshList(false);
    }
  }, [refreshList]);

  interface ProductForm {
    ProductName: string;
    ProductPrice: number;
    ProductQuantity: number;
  }
  const onSubmit = (data: ProductForm) => {
    console.log("DATA", data);
    const productsList: Product[] = products;
    try {
      productsList.push({
        id: products.length + 1,
        name: data.ProductName,
        price: data.ProductPrice,
        quantity: data.ProductQuantity || 1,
      });
      localStorage.setItem("products", JSON.stringify(productsList));
      setRefreshList(true);
    } catch (e) {
      console.log(e);
    } finally {
      reset();
    }
  };

  const cleanCart = () => {
    localStorage.clear();
    setRefreshList(true);
  };

  const removeItem = (id: number) => {
    products.splice(id, 1);
    const productsList: Product[] = products;
    localStorage.setItem("products", JSON.stringify(productsList));
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
            <input
              autoComplete="off"
              placeholder="* Name"
              maxLength={10}
              type="text"
              name="ProductName"
              autoFocus
              ref={register({ required: true })}
            />
          </InputContainer>
          <InputContainer>
            <input
              autoComplete="off"
              placeholder="* Price"
              max="9999"
              type="number"
              min="0"
              name="ProductPrice"
              ref={register({ required: true })}
            />
          </InputContainer>
        </FormContainer1>
        <input
          autoComplete="off"
          placeholder="Quantity"
          type="number"
          min="0"
          max="9999"
          name="ProductQuantity"
          ref={register}
        />
        <ButtonsContainer>
          <button type="submit">Add to cart</button>
          <button onClick={() => cleanCart()}>Clean cart list</button>
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
