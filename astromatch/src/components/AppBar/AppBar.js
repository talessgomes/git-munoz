import React from "react"
import { AppBarContainer, Logo, ButtonBar, ButtonList } from "./styled"
import logoImage from "../../img/logo.png"

function AppBar(props) {
  return (
    <AppBarContainer>
      <ButtonBar onClick={props.goToChooseProfile}>Escolher</ButtonBar>
      <Logo src={logoImage}/>
      <ButtonList onClick={props.goToMatchListPage}>Lista</ButtonList>
    </AppBarContainer>
  )
}

export default AppBar