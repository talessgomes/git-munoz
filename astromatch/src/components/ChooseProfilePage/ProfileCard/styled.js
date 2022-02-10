import styled from "styled-components"

export const ProfileCardContainer = styled.div`
   margin: 16px;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
`

export const ProfilePicture = styled.img`
   width: 100%;
   height: 300px;
   display: block;
   border: 1px solid black;
   z-index: 1;
   max-height: 370px;
`

export const ProfileInfo = styled.div`
   border: 1px solid black;
   padding: 0 16px;
`

export const userName = styled.div `
   font-weight: bold;
   font-size: 24px;
`

export const userAge = styled.div `
margin-left: 10px;
   font-size: 20px;
`

export const userDescription = styled.p `
   margin-top: 5px;
`

export const infoWrapper = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   padding: 15px;
   z-index: 2;
   height: 30%;
   position: absolute;
   bottom: 0;
   width: 100%;
   background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
`

export const TitleWrapper = styled.div `
   display: flex;
   align-items: baseline;
`