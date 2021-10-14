import React from "react";
import {StyledToolbar} from "./index"
import Button from '@material-ui/core/Button';
import { AppBar } from "@material-ui/core";
import { goToAboutMe, goToContact, goToHome, goToProjetcs } from "../../Route/Coordinator";
import { useHistory } from "react-router";

export const  Header = () => {
  const history = useHistory()
  return (
    <AppBar>
      <StyledToolbar color={"third"} position="static">
      <h1 onClick={() => goToHome(history)}>Home</h1>
      <div>
        <Button
        onClick={() => goToAboutMe(history)}
         variant="text"
          color="inherit"
          >
            Quem sou eu
            </Button>
            <Button
            onClick={() => goToProjetcs(history)}
         variant="text"
         color="inherit"
          >
            Projetos
            </Button>
            <Button
            onClick={() => goToContact(history)}
         variant="text"
         color="inherit"
          >
            Contato
            </Button>
      </div>
    </StyledToolbar>
    </AppBar>
  );
}

