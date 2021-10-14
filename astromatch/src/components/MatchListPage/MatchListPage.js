import axios from "axios"
import React, { useEffect, useState } from "react"
import MatchListItem from "./MatchListItem/MatchListItem"
import { ListContainer } from "./styled"

function MatchListPage() {
  const [matches, setMatches] = useState([])


  useEffect(()=> {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches")
    .then(response =>{console.log(response.data.matches)
      setMatches(response.data.matches)
    })
  }, [])

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile}/>
      })}
    </ListContainer>
  )
}

export default MatchListPage