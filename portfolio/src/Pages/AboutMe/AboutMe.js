import React from "react";
import cv from "../../img/_Currículo.pdf"
export const AboutMe = () => {
  return (
    <div>
      <h1>Sobre Mim</h1>
      <p>Sou um Desenvolvedor Front-end, estou a procura de uma oportunidade</p>
      <button src={cv} target="_blank"><h2>CV</h2></button>
    </div>
  );
}

