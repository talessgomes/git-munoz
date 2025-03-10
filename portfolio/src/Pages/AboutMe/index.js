import styled from "styled-components";

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #A8909C;

 /* Para tablets */
 @media (max-width: 768px) {
   
}
/* Para celulares */
   @media (max-width: 480px) {
      width: 100%;
}

`;


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

/* Para tablets */
@media (max-width: 768px) {
   
}
/* Para celulares */
   @media (max-width: 480px) {
      p {
         width: 100%;
      }
}


`

export const LinguageContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8px;

   /* Para tablets */
   @media (max-width: 768px) {
   
}
/* Para celulares */
   @media (max-width: 480px) {
}

`


export const ButtonCurriculum = styled.button `
      width: 100px;
      height: fit-content;
      min-height:fit-content;
      min-width:fit-content;
      padding:1vh;
      margin-top:1vw;
      background-color: #6086C5;
      border: solid black 1px;
      outline: none;
      font-size: 18pt;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      cursor: pointer;
      border-radius: 8px;
      text-decoration: none;
      text-align: center;
      transition: 0.5s;
      margin-bottom: 10px;
      a{
         color: white;
         text-decoration: none;
         width: 100%;
      }
      :hover{
         background-color: #A8090C;
         transform: scale(0.9);
         color: white;
      }

      /* Para tablets */
   @media (max-width: 768px) {
   
}
/* Para celulares */
   @media (max-width: 480px) {
}

`