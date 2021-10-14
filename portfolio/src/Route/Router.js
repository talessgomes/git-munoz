import React from "react";
import {Switch, Route} from "react-router-dom";
import {Home} from "../Pages/Home/Home"
import {AboutMe} from "../Pages/AboutMe/AboutMe"
import {Main} from "../Pages/Main/Main";
import {Projects} from "../Pages/Projects/Projects";
import { Contact } from "../Pages/Contact/Contact";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path={"/sobre-mim"}>
                <AboutMe/>
            </Route>
            <Route exact path={"/educacao"}>
                <Main/>
            </Route>
            <Route exact path={"/meus-projetos"}>
                <Projects/>
            </Route>
            <Route exact path={"/Contrate-me"}>
                <Contact/>
            </Route>
        </Switch>
    )
}