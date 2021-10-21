import styled from "styled-components"

export const AboutMeContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #A8090C;
`

export const TextAboutMe = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 5vw;
   font-weight: 400;
   min-height: 330px;
   h1{
  font-size: 42pt;
  text-transform: uppercase;
  text-transform:  0px 0px 5px black;
  color: white;
}
p{
  color:white;
  margin-top: -1vw;
  font-weight: 300;
  text-shadow: 0px 0px 5px black;
  font-size: 20pt;
  width: 80%;
}

`

export const LinguageContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8px;
`