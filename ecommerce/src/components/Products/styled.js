import styled from "styled-components"

export const ProductsContainer = styled.div`

`

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
   padding: 4px 0;

   p {
     margin: 0;
   }
`

export const AddToCardButton = styled.button`
   align-self: center;
   margin-top: 4px;
`