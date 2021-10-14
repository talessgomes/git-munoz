import React, { useState } from "react"
import AppBar from "../AppBar/AppBar"
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage"
import MatchListPage from "../MatchListPage/MatchListPage"
import { MainContainer } from "./styled"


function Main() {
  const [selectedPage, setSelectPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage/>
        case 'match-list':
          return <MatchListPage/>
          default: <ChooseProfilePage/>
    }
  }

  const goToChooseProfile = () => {
    setSelectPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectPage('match-list')
  }

  return (
    <MainContainer>
      <AppBar
       goToChooseProfile={goToChooseProfile}
        goToMatchListPage={goToMatchListPage}
        />
      {renderSelectedPage()}
    </MainContainer>
  )
}

export default Main