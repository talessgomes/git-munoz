import React from "react";
import {ProjectsContainer,
  ListProject
} from "./index"

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Meus projetos</h2>
      <ListProject>
        <h2>Pokédex</h2>
        <div>
          <h2>Pokédex</h2>
          <p>Esse projeto foi feito com um grupo, nele é possível ver os detalhes do pokémon,
           da para adicionar os pokémons dentro da pokédex,
           também tem um filtro nele, onde é possível filtar o a busca.
            </p>
            <a href="https://github.com/future4code/munoz-pokedex6" target="_blank"><button>Pokédex</button></a>
          </div>

      </ListProject>
    </ProjectsContainer>
  );
}