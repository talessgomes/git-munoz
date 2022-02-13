import React from "react";
import {ProjectsContainer} from "./index"
import { ListProject } from "./ListProject/ListProject";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Meus projetos</h2>
      <ListProject/>
    </ProjectsContainer>
  );
}