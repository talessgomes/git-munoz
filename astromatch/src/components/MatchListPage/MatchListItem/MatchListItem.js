import React from "react"
import { Avatar, ListItemContaier, ListText } from "./styled"

function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContaier>
      <Avatar src={profile.photo}/>
      <ListText>{profile.name}</ListText>
    </ListItemContaier>
  )
}

export default MatchListItem