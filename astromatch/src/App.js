import React from "react"
import Main from "./components/Main/Main";
import ResetButton from "./components/ResetButton/ResetButton";
import styled from "styled-components";

export const AppContainer = styled.div `
   display: flex;
   justify-content: center;
   margin-top: 5%;

`

function App() {
  return (
    <AppContainer>
      <Main/>
      <ResetButton/>
    </AppContainer>
  );
}

export default App;
