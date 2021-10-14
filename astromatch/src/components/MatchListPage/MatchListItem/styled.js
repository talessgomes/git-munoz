import styled from "styled-components";

export const ListItemContaier = styled.div`
   display: flex;
   align-items: center;
   border-bottom: 1px solid gray;

   :hover {
     background-color: rgba(0,0,0,0.3);
   }
`

export const Avatar = styled.img`
   border-radius: 50%;
   margin-right: 8px;
   height: 30px;
   width: 30px;
`