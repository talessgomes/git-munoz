import React from "react";
import { Home } from "../Home/Home";
import { AboutMe } from "../AboutMe/AboutMe";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import {Footer} from "../../Components/Footer/Footer"


export const Main = () => {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}