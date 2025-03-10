import styled from "styled-components"

export const HomeContainter = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   text-align: center;
   background-color: #6086C5;

    /* Para tablets */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }

  /* Para celulares */
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

export const PerfilImage = styled.img`
   height: 80%;
   min-width: 20%;
   margin-left: 5%;
   margin-bottom: 5%;
   position: relative;
   border: 1px solid black;

   /* Para tablets */
  @media (max-width: 768px) {
   display: none;
  }
  /* Para celulares */
   @media (max-width: 480px) {
   display: none; //Faz a foto desaparecer
 }
`

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   text-align: center;
   align-items: flex-start;
   margin-left: 2%;
   width: 50vw;

   /* Para celulares */
   @media (max-width: 480px) {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
   }
`

export const IconeContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   position: relative;
   height: 35vh;
   width: 10%;
   a{
    text-decoration:none;
    color: ${('#1d1d1d')};
    :hover{
        color: #A8090C;
        transform: scale(1.2); /* Aumenta 20% do tamanho */
        opacity: 0.8;
        transition: all 0.3s ease;
    }
}

  /* Para tablets */
   @media (max-width: 768px) {
   
}
/* Para celulares */
   @media (max-width: 480px) {
    width: 70%;
    flex-direction: row; /* Alinha horizontalmente no mobile */
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50vw;
   
    a {
      height: 15vh;
    }
    
}
`

