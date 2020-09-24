import React from 'react';
import { Switch, Route } from 'react-router-dom';

import landingPage from './landingPage';
import about from './about';
import contact from './contact';
import projects from './projects';



const Main = () => (
    <Switch>
        <Route exact path= "/" component= {landingPage} />
        <Route path= "/landingPage" component= {landingPage} />
        <Route path= "/about" component= {about} />
        <Route path= "/contact" component= {contact} />
        <Route path= "/projects" component= {projects} />
        
    </Switch>
)

export default Main;