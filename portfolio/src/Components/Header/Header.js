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
        <span
        onClick={() => goToAboutMe(history)}
         variant="text"
          color="inherit"
          >
            Quem sou eu
            </span>
            <span
            onClick={() => goToProjetcs(history)}
         variant="text"
         color="inherit"
          >
            Projetos
            </span>
            <span
            onClick={() => goToContact(history)}
         variant="text"
         color="inherit"
          >
            Contato
            </span>
      </div>
    </HeaderContainer>
  );
}

