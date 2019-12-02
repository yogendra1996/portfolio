import React from "react";
import LandingPage from "./landingpage";
import { Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Project from "./project";
import Resume from "./resume";

const Main = () => (
  <switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Project} />
    <Route path="/resume" component={Resume} />
  </switch>
);

export default Main;
