import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  border: 1px solid black;
`;
const IdContainer = styled.div`
  background-color: black;
  color: white;
`;
const DescriptionContainer = styled.div``;

interface TaskProps {
  id: number;
  description: string;
}
const TaskItem = ({ id, description }: TaskProps) => {
  return (
    <Container>
      <IdContainer>{id}</IdContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
    </Container>
  );
};

export default TaskItem;
