import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Tasks from "../Tasks/Tasks";

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

export interface Task {
  id: number;
  description: string;
}

const Main = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshList, setRefreshList] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("tasks") !== null) {
      setTasks(JSON.parse(localStorage.getItem("tasks") || ""));
      setRefreshList(false);
    } else {
      setRefreshList(false);
    }
  }, [refreshList]);

  const AddTask = (task: string) => {
    const tasksList: Task[] = tasks;
    if (task.trim() === "") {
      alert("debe ingresar una tarea antes de agregarla");
      return;
    }
    tasksList.push({ id: tasks.length + 1, description: task });
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    setInputValue("");
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
            AddTask(inputValue);
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
      <Tasks tasks={tasks} />
    </Container>
  );
};

export default Main;
