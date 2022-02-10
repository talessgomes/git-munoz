import React, { useEffect, useState } from "react"
import ChooseButons from "./ChooseButons/ChooseButons"
import ProfileCard from "./ProfileCard/ProfileCard"
import {Loader} from '../loader/index';
import axios from "axios"

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined)

  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person')
    .then(response =>{console.log("PERFIL:", response.data.profile)
    setProfileToChoose(response.data.profile)
  })
  }
  useEffect(() => {
    getProfileToChoose()
  }, []);

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id
    }
    setProfileToChoose(undefined)
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person", body)
    .then(response => { console.log(response)
    getProfileToChoose()
    })
  }

    const onClickNo = () => {
    chooseProfile(false)
  }
  const onClickYes = () => {
    chooseProfile(true)
  }

  return (
    <div>
      { profileToChoose ?
      (<>
        <ProfileCard profile={profileToChoose}/>
      <ChooseButons onClickNo={onClickNo} onClickYes={onClickYes}/>
      </>) : <Loader>Carregando...</Loader>
      }
    </div>
  )
}

export default ChooseProfilePage