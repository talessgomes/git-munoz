import styled from "styled-components";

export const ContactContainer = styled.div`
   width: 100%;
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   justify-content: space-evenly;
   height: fit-content;
   padding-top: 16vh;
   padding-bottom: 6vh;
   background-color: #6086C5;
   h1 {
      font-size: 30pt;
      margin-bottom:  4vh;
      color: #A8090C;
      text-transform: 0px 0px 0px 5px black;
   }
   p{
      font-size: 20pt;
      margin-top: -1vw;
      text-transform: 0px 0px 0px 5px black;
   }
`

export const InformationContainer = styled.div`
   margin-top: 6vh;
   display: flex;
   flex-direction: column;
`

export const IconeContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   position: relative;
   height: 35vh;
   width: 250px;
   a{
      margin-top: 5vw;
    text-decoration:none;
    color: ${('#1d1d1d')};
    :hover{
        color: #A8090C;
    }
}
`