import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Products from "../Products/Products";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-color: lightgrey;
`;

const Title = styled.div`
  font-family: "Staatliches", cursive;
  font-size: 20px;
  padding: 10px 10px;
`;

const AddTaskContainer = styled.div`
  display: flex;
  height: 30px;
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

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      setProducts(JSON.parse(localStorage.getItem("products") || ""));
      setRefreshList(false);
    } else {
      setRefreshList(false);
    }
  }, [refreshList]);

  interface ProductForm {
    ProductName: string;
    ProductPrice: number;
    ProductQuantity: number;
  }
  const onSubmit = (data: ProductForm) => {
    const productsList: Product[] = products;
    productsList.push({
      id: products.length + 1,
      name: data.ProductName,
      price: data.ProductPrice,
      quantity: data.ProductQuantity || 1,
    });
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
      <AddTaskContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="* Name"
            type="text"
            name="ProductName"
            ref={register({ required: true })}
          />
          <input
            placeholder="* Price"
            type="number"
            min="0"
            name="ProductPrice"
            ref={register({ required: true })}
          />
          <input
            placeholder="Quantity"
            type="number"
            min="0"
            name="ProductQuantity"
            ref={register}
          />
          <input type="submit" value="Add to cart" />
        </form>
      </AddTaskContainer>
      <Products products={products} />
    </Container>
  );
};

export default Main;
