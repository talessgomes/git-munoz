import React from "react";
import theme from "./constants/theme"
import { ThemeProvider } from "styled-components";
import {Header} from "./Components/Header/Header";
import { Router } from "./Route/Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
