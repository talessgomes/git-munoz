import styled from "styled-components"

export const ResetButtonStyled = styled.button `
    width: 100px;
    height: 80px;
    border-radius: 25%;
    cursor: pointer;

    :hover {
        transform: scale(0.9);
    }

`

export const ResetButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 30px 0px 0px 0px;
`