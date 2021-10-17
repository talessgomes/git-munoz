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
   height: 521px;
   max-width: 498px;
   margin: 50px 32px 0;
   border: 1px solid black;
`

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: flex-start;
   margin-left: 70px;
   width: 50vw;
`

export const IconeContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
   position: relative;
   height: 35vh;
   width: 5vw;
   a{
    text-decoration:none;
    color: ${('#1d1d1d')};
    :hover{
        color: #A8090C;
    }
}
`

