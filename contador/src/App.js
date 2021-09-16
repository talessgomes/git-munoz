import React from "react";
import { ContadorEstado } from "./Components/ContadorEstado/ContadorEstado";
import {Contador} from "./Components/Contador.js/Contador"
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contador/>

      </div>
    );
   }
  }
  

