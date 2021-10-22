import React from "react";
import {ContactContainer, InformationContainer, IconeContainer} from "./index"
import { GitHub, WhatsApp, LinkedIn } from "@material-ui/icons";

export const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contate-me!</h1>
      <p>Procuro oportunidade de trabalho onde eu possa aprender,</p>
      <p>me desenvolver e evoluir na minha carreira profissional.</p>
      <InformationContainer>
        <p>E-mail para contato: tales.gomes_sl@hotmail.com</p>
        <p>Celular:(51)996491450</p>
       </InformationContainer>
      <IconeContainer>
        <a href="https://github.com/talessgomes" target="_blank"><GitHub style={{fontSize: 30}}/></a>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551996491450" target="_blank"><WhatsApp style={{fontSize: 30}}/></a>
          <a href="https://www.linkedin.com/in/talessgomes/" target="_blank"><LinkedIn style={{fontSize: 30}}/></a>
      </IconeContainer>
    </ContactContainer>
  );
}

