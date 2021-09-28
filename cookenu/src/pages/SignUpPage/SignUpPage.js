import React from "react"
import logo from "../../assets/logo.png"
import useUnProtectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { LogoImage, ScreenContainer } from "./styled";

const SignUpPage = ({setRightButtonText}) => {
  useUnProtectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
        <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  );
}

export default SignUpPage