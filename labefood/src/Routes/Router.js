import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import FeedPage from "../pages/FeedPage/Feedpage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <FeedPage/>
      </Route>
      <Route exact path="/login">
      <LoginPage/>
      </Route>
      <Route exact path="/cadastrar">
        <SignUpPage/>
      </Route>
      <Route exact path="">
      </Route>
      <Route exact path="">

      </Route>
      <Route exact path="">

      </Route>
      <Route exact path="">

      </Route>
      <Route exact path="">

      </Route>
      <Route exact path="">

      </Route>
    </Switch>
    </BrowserRouter>
  )

}

export default Router;