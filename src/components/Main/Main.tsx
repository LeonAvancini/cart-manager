import React, { useEffect, useState } from "react";
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

const AddTaskInput = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 100%;
`;

const AddTaskButton = styled.button`
  height: 100%;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ed3330;
  // border-top-right-radius: 5px;
  // border-bottom-right-radius: 5px;
  padding: 10px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  max-width: 50px;
  &:hover {
    background: #434343;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Main = () => {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshList, setRefreshList] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      setProducts(JSON.parse(localStorage.getItem("products") || ""));
      setRefreshList(false);
    } else {
      setRefreshList(false);
    }
  }, [refreshList]);

  const AddProduct = (name: string, price: number, quantity?: number) => {
    const productsList: Product[] = products;
    if (name.trim() === "") {
      alert("debe ingresar una producto antes de agregarlo al carrito");
      return;
    } else if (price === 0) {
      alert(
        "debe ingresar una precio al producto antes de agregarlo al carrito"
      );
      return;
    }
    productsList.push({
      id: products.length + 1,
      name: name,
      price: price,
      quantity: quantity || 1,
    });
    localStorage.setItem("products", JSON.stringify(productsList));
    setProductName("");
    setProductPrice(0);
    setProductQuantity(1);
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
        <AddTaskInput
          placeholder="add a product"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <AddTaskButton
          onClick={() => {
            //FIXME: send product price and quantity correctly
            AddProduct(productName, 5);
          }}
        >
          +
        </AddTaskButton>
        {/* <AddTaskButton
          onClick={() => {
            localStorage.clear();
          }}
        >
          Borrar
        </AddTaskButton> */}
      </AddTaskContainer>
      <Products products={products} />
    </Container>
  );
};

export default Main;
