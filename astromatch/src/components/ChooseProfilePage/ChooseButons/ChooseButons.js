import React from "react"
import { ButtonsContainer } from "./styled"

function ChooseButons(props) {

  return (
    <ButtonsContainer>
      <button onClick={props.onClickNo}>Não</button>
      <button onClick={props.onClickYes}>Sim</button>
    </ButtonsContainer>
  )
}

export default ChooseButons
