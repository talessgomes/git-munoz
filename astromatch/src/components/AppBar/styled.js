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
   width: 80px;
   height: 25px;
   border-radius: 20px;
   font-size: 15px;
   border: 1px solid #4AA397;
   :hover {
      transform: scale(0.9);
   }

   :hover {
      background-color: #4AA397;
      transform: scale(0.9);
      color: white;
   }
   
`

export const ButtonList = styled.button `
   cursor: pointer;
   transition: 0.2;
   width: 80px;
   height: 25px;
   border-radius: 20px;
   font-size: 15px;
   border: 1px solid purple;
   :hover {
      background-color: purple ;
      color: white;
      transform: scale(0.9);
   }
   
`