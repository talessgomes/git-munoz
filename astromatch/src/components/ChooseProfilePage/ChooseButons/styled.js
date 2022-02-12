import styled from "styled-components"

export const ButtonsContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 4px 0;
`

export const ButtonNo = styled.button `
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 1px solid red;
   color: red;
   font-size: 50px
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   cursor: pointer;

   :focus {
      outline: none;
   }

   :hover {
      background-color: red;
      color: white;
      transform: scale(0.9);
   }

   :active {
      :before {
         height: 100%;
         width: 100%;
         top: 0;
         left: 0;
         position: absolute;
         background-color: rgba(0, 0, 0, 0.5);
      }
   }
`

export const ButtonLike = styled.button `
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 1px solid green;
   color: green;
   font-size: 50px
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   cursor: pointer;

   :focus {
      outline: none;
   }

   :hover {
      background-color: green;
      color: white;
      transform: scale(0.9);
   }

   :active {
      :before {
         height: 100%;
         width: 100%;
         top: 0;
         left: 0;
         position: absolute;
         background-color: rgba(0, 0, 0, 0.5);
      }
`