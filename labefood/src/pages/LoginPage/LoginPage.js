import React from "react"
import LoginForm from "./LoginForm";
import { ScreenContainer } from "./styled";
import logo from "../../assets/ImagemLogo/logo-login.png"

const LoginPage = () => {
  return(
    <ScreenContainer>
      <img src={logo}/>
      <LoginForm/>
    </ScreenContainer>
  )
}

export default LoginPage;