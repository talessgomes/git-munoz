import styled from "styled-components";
import Toolbar from '@material-ui/core/Toolbar'

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: row;
   padding: 14px;
   background-color: "primary";
   height: 60px;
`


export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
`