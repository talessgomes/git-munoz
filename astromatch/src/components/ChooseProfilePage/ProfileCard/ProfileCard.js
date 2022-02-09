import React from "react"
import { ProfileCardContainer, 
         ProfilePicture, 
         ProfileInfo,
         userName,
         userAge,
         userDescription,
         infoWrapper,
         TitleWrapper} from "./styled"

function ProfileCard(props) {
  const profile = props.profile
  return (
    <ProfileCardContainer>
      
      <ProfilePicture src={profile.photo}/>
      <ProfileInfo>
        <infoWrapper>
          <TitleWrapper>
          <userName>{profile.name},</userName>
         <userAge>{profile.age}</userAge> 
          </TitleWrapper>
      <userDescription>{profile.bio}</userDescription>
      </infoWrapper>
        </ProfileInfo>
    </ProfileCardContainer>
  )
}

export default ProfileCard