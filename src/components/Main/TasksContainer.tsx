import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
  border: 2px solid red;
  background-color: white;
`;

const TasksContainer = () => {
  const test = localStorage.getItem("task");
  return <Container>{test}</Container>;
};

export default TasksContainer;
