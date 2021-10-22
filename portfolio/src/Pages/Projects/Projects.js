import React from "react";
import {ProjectsContainer,
  ListProject01,
  ButtonProject
} from "./index"
import project01 from "../../img/imac.png"

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Meus projetos</h2>
      <ListProject01>
        <img src={project01}/>
        <div>
          <h2>Pokédex</h2>
          <p>Esse projeto foi feito com um grupo, nele é possível ver os detalhes do pokémon,
           da para adicionar os pokémons dentro da pokédex,
           também tem um filtro nele, onde é possível filtar o a busca.
            </p>
            <ButtonProject><a href="https://github.com/future4code/munoz-pokedex6" target="_blank">Ver no Github</a></ButtonProject>
          </div>

      </ListProject01>
    </ProjectsContainer>
  );
}