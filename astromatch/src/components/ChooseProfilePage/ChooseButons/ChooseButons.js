import React from "react"
import { ButtonsContainer, ButtonNo, ButtonLike } from "./styled"

function ChooseButons(props) {

  return (
    <ButtonsContainer>
      <ButtonNo onClick={props.onClickNo}>Não</ButtonNo>
      <ButtonLike onClick={props.onClickYes}>Sim</ButtonLike>
    </ButtonsContainer>
  )
}

export default ChooseButons
