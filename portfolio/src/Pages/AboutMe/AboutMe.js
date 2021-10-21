import React from "react";
import { AboutMeContainer, TextAboutMe, LinguageContainer } from "./index"

export const AboutMe = () => {
  return (
    <AboutMeContainer>
      <TextAboutMe>
        <h1>Sobre Mim</h1>
      <p>Sou um Desenvolvedor Front-end, estou cursando Análise e Desenvolvimento, estou procurando uma oportunidade de emprego.</p>
      <LinguageContainer>
          <p>|HTML</p>
          <p>|CSS</p>
          <p>|Javascript</p>
          <p>|React</p>
        </LinguageContainer>
        </TextAboutMe>
    </AboutMeContainer>
  );
}

