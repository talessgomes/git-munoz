import { AppBar, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToRecipesList } from "../../routes/coordinator";
import { StyledToolbar } from "./styled"

export const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token){
            logout()
            setRightButtonText("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
    }