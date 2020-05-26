import React from "react";
import {Switch, Route} from 'react-router-dom';

import LandingPage from "../LandingPage/LandingPage.component";
import AboutMe from "../AboutMe/AboutMe.component";
import Resume from "../Resume/Resume.component";
import Projects from "../Projects/Projects.component";
import Contact from "../Contact/Contact.component";

const Router = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
);

export default Router;