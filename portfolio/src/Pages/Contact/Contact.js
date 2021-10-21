import React from "react";
import {ContactContainer} from "./index"
import { GitHub, WhatsApp, LinkedIn } from "@material-ui/icons";

export const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contate-me!</h1>
      <p>Procuro oportunidade de trabalho onde eu possa aprender,</p>
      <p>me desenvolver e evoluir na minha carreira profissional.</p>
      <div>
        <p>E-mail para contato: tales.gomes_sL@hotmail.com</p>
      <p>Celular:(51)996491450</p>
       </div>
      <div>
        <a href="https://github.com/talessgomes" target="_blank"><GitHub style={{fontSize: 30}}/></a>
          <a href="https://github.com/talessgomes" target="_blank"><WhatsApp style={{fontSize: 30}}/></a>
          <a href="https://github.com/talessgomes" target="_blank"><LinkedIn style={{fontSize: 30}}/></a>
      </div>
    </ContactContainer>
  );
}

