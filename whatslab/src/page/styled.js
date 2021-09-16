import styled from "styled-components"

export const MessageContainer = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid black;
   height: 100vh;
   box-sizing: border-box;
   width: 600px;
   margin: auto;
`

export const SendContainer = styled.div`
   display: flex;
   flex-direction: column-reverse;
   flex-grow: 1;
   padding: 16px;
`

export const InputContainer = styled.div`
   display: flex;
`

export const NameInput = styled.input`
   width: 100px;
` 

export const SendInput = styled.input`
   flex-grow: 1;
` 