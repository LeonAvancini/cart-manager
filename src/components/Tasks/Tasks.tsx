import React from "react";
import styled from "styled-components";
import { Task } from "../Main/Main";
import TaskItem from "./TaskItem/TaskItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
  border: 2px solid red;
  background-color: white;
`;
interface TasksProps {
  tasks: Task[];
}
const Tasks = ({ tasks }: TasksProps) => {
  return (
    <Container>
      {tasks.map((task) => {
        return <TaskItem id={task.id} description={task.description} />;
      })}
    </Container>
  );
};

export default Tasks;
