import styled from "styled-components"

export const HomeContainter = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   text-align: center;
   background-color: #6086C5;
`

export const PerfilImage = styled.img`
   height: 80%;
   min-width: 20%;
   margin-left: 5%;
   margin-bottom: 5%;
   position: relative;
   border: 1px solid black;
`

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   text-align: center;
   align-items: flex-start;
   margin-left: 2%;
   width: 50vw;
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
    }
}
`

