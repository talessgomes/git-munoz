import React from "react"
import { AppBarContainer } from "./styled"

function AppBar(props) {
  return (
    <AppBarContainer>
      <button onClick={props.goToChooseProfile}>Escolher</button>
      <p>Astromatch</p>
      <button onClick={props.goToMatchListPage}>Lista</button>
    </AppBarContainer>
  )
}

export default AppBar