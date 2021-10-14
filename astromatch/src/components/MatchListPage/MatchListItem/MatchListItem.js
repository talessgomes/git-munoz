import React from "react"
import { Avatar, ListItemContaier } from "./styled"

function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContaier>
      <Avatar src={profile.photo}/>
      <p>{profile.name}</p>
    </ListItemContaier>
  )
}

export default MatchListItem