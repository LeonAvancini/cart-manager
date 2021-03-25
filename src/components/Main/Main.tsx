import React, { useState } from "react";
import styled from "styled-components";
import TasksContainer from "./TasksContainer";
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
const Main = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Container>
      <Title>TODO Manager</Title>
      <AddTaskContainer>
        <AddTaskInput
          placeholder="add a task"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <AddTaskButton
          onClick={() => {
            localStorage.setItem("task", inputValue);
          }}
        >
          +
        </AddTaskButton>
      </AddTaskContainer>
      <TasksContainer />
    </Container>
  );
};

export default Main;
