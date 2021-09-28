import React from "react"
import { ScreenContainer,
  LogoImage,
  SignUpButtonContainer
} from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core";
import { LoginForm } from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useUnProtectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({ setRightButtonText}) => {
  useUnProtectedPage()
  const history = useHistory()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <LoginForm setRightButtonText={setRightButtonText}/>
      <SignUpButtonContainer>
      <Button
      onClick={() => goToSignUp(history)}
        type="submit"
        fullWidth
        variant={"text"}
        color={"primary"}
        margin={"normal"}    
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage