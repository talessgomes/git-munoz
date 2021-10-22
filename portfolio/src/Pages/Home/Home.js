import React from "react";
import { PerfilImage, HomeContainter,TextContainer, IconeContainer } from "./index";
import imagem from "../../img/tales.jpg"
import { Typography } from "@material-ui/core";
import { GitHub, WhatsApp, LinkedIn } from "@material-ui/icons";
import { Header } from "../../Components/Header/Header";


export const Home = () => {
  return (
    <HomeContainter>
      <PerfilImage src={imagem}/>
      <TextContainer>
        <Typography color={"secondary"} variant={"h2"} aling={"center"}>Eu sou</Typography>
        <Typography color={"secondary"} variant={"h2"} aling={"center"}> Tales Gomes</Typography>
        <Typography color={"secondary"} variant={"h5"} aling={"center"}> Desenvolvedor Front-End</Typography>
      </TextContainer>
      <IconeContainer>
          <a href="https://github.com/talessgomes" target="_blank"><GitHub style={{fontSize: 30}}/></a>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551996491450" target="_blank"><WhatsApp style={{fontSize: 30}}/></a>
          <a href="https://www.linkedin.com/in/talessgomes/" target="_blank"><LinkedIn style={{fontSize: 30}}/></a>
      </IconeContainer>
    </HomeContainter>
  );
}
