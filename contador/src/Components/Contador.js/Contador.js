import React, { useState} from "react";
import {ContainerContador, ButtonContainer} from "./index"

export const Contador = () => {
    const [state, setState] = useState(0);
    
     const onClickSoma = () => {
          setState(state +1);
      };
    
     const onClickSubtracao = () => {
        setState(state -1);
      };
      return (
   <ContainerContador>
    <h3>Contador Hook</h3>
    <p>{state}</p>
    <div>
    <ButtonContainer onClick={onClickSubtracao}>Subtrair</ButtonContainer>
    <ButtonContainer onClick={onClickSoma}>Somar</ButtonContainer>
    </div>
   </ContainerContador>
      )
}

