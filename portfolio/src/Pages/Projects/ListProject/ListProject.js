import React from "react";
import {ListProjects, ButtonProject} from "../index";
import project01 from "../../../img/imac.png";
import McBook from "../../../img/macbook.png";

export const ListProject = () => {
    return (
        <div>
            <ListProjects>
        <img src={project01}/>
        <div>
          <h2>Pokédex</h2>
          <p>Esse projeto foi feito com um grupo, nele é possível ver os detalhes do pokémon,
           da para adicionar os pokémons dentro da pokédex,
           também tem um filtro nele, onde é possível filtar o a busca.
            </p>
            <ButtonProject><a href="https://github.com/future4code/munoz-pokedex6" target="_blank">Ver no Github</a></ButtonProject>
          </div>

      </ListProjects>
      <ListProjects>
        <img src={McBook}/>
        <div>
          <h2>Astromatch</h2>
          <p>O Astromatch foi criado através de uma API inspirada no Aplicativo Tinder,
               nele é possível selecionar o perfil que tu for ter interesse e escolher dando sim ou não,
               também vai ter uma lista de usuários que receberem o sim.
            </p>
            <ButtonProject><a href="https://github.com/talessgomes/git-munoz/tree/astromatch04" target="_blank">Ver no Github</a></ButtonProject>
          </div>
      </ListProjects>
        </div>
    );
}