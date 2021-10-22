import styled from "styled-components"

export const ProjectsContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   width: 100%;
   background-color: #DCD4B9;
`

export const ListProject01 = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 500px;
   gap: 100px;
   img{
      width: 312px;
      height: 216px;
   }
   p{
      width: 450px;
      font-size: 20px;
      line-height: normal;
      letter-spacing: -0.16px;
   }
`
export const ButtonProject = styled.button`
      width: 48%;
      height: fit-content;
      min-height:fit-content;
      min-width:fit-content;
      padding:1vh;
      margin-top:1vw;
      background-color: #6086C5;
      border: none;
      border: 1px solid black;
      outline: none;
      font-size: 12pt;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      cursor: pointer;
      border-radius: 8px;
      text-decoration: none;
      text-align: center;
      transition: 0.5s;
      margin-bottom: 10px;
      a{
         color: white;
         text-decoration: none;
         width: 100%;
      }
      :hover{
         background-color: #A8090C;
      }
`