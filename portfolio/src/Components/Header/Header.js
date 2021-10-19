import React from "react";
import {HeaderContainer,
  SpanContainer
} from "./index"
import { goToAboutMe, goToContact, goToMain, goToProjetcs } from "../../Route/Coordinator";
import { useHistory} from "react-router";

export const  Header = () => {
  const history = useHistory()
  return (
    <HeaderContainer>
      <h1 onClick={() => goToMain(history)}>Home</h1>
      <div>
        <SpanContainer
        onClick={() => goToAboutMe(history)}
         variant="text"
          color="inherit"
          >
            Quem sou eu
            </SpanContainer>
            <SpanContainer
            onClick={() => goToProjetcs(history)}
         variant="text"
         color="inherit"
          >
            Projetos
            </SpanContainer>
            <SpanContainer
            onClick={() => goToContact(history)}
         variant="text"
         color="inherit"
          >
            Contato
            </SpanContainer>
      </div>
    </HeaderContainer>
  );
}

