import React from "react";
import Main from "./components/Main/Main";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  if (typeof Storage !== "undefined") {
    return (
      <Container>
        <Main />
      </Container>
    );
  } else {
    return (
      <Container>Tu navegador no es compatible con LocalStorage</Container>
    );
  }
}

export default App;
