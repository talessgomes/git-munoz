import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
   position: sticky;
   padding: 10px;
   background-color: #112A80;
   height: 8vh;
   box-shadow: 0px -8px 10px #000000c7;
   h1 {
      cursor: pointer;
      color: white;
   }
   span{
   color: white;
   cursor: pointer;
   margin-left: 4vw;
   font-size: 3vh;
   text-decoration: none;
   }
`


export const SpanContainer = styled.span`
   color: white;
   margin-left: 4vw;
   font-size: 3vh;
`