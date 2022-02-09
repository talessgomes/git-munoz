import styled from "styled-components";

export const AppBarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 50px;
   position: relative;
   border-bottom: 1px solid lightgray;
   align-items: center;
   padding: 0 10px;
   flex-shrink: 0;
`

export const Logo = styled.img`
   height: 100%;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
`

export const ButtonBar = styled.button `
   cursor: pointer;
   transition: 0.2;

   :hover {
      transform: scale(0.9);
   }
   
`

export const ButtonList = styled.button `
   cursor: pointer;
   transition: 0.2;

   :hover {
      transform: scale(0.9);
   }
   
`