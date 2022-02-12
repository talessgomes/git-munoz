import axios from "axios"
import React from "react"
import {ResetButtonStyled, ResetButtonContainer} from "./styled"

function ResetButton() {

  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
    .then(response => {
      console.log(response)
    })
  }
    return (
    <ResetButtonContainer>
      <ResetButtonStyled onClick={onClickReset}>Resetar Curtidas e Matches</ResetButtonStyled>
    </ResetButtonContainer>
  )
}

export default ResetButton