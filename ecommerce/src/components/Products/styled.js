import styled from "styled-components"

export const ProductsContainer = styled.div`
   width: 100%;
   height: 110vh;
`

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  padding: 0 16px;
`

export const ProductsGrid = styled.div `
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 16px;
   padding: 16px;
`

export const CardContainer = styled.div`
   border: 1px solid black;
   display: flex;
   flex-direction: column;
`

export const CardInfo = styled.div`
   display: flex;
   flex-direction: column;
   padding-left: 1vw;

   p {
     margin: 0;
     font-size: 12pt;
   }
`

export const AddToCardButton = styled.button`
   width: 48%;
   height: fit-content;
   min-height: fit-content;
   min-width: fit-content;
   padding: 1vh;
   margin-top: 1vw;
   background-color: white;
   border: none;
   border: 1px solid black;
   align-self: center;
   outline: none;
   font-size: 10pt;
   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
   cursor: pointer;
   border-radius: 8px;
   transition: 0.5s;
   margin-bottom: 10px;
   :hover{
      background-color: yellow;
   }
`