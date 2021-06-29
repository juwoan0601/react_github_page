import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header";
import homePage from '../pages/home';
import awardPage from '../pages/award';
import projectPage from '../pages/project';
import referencePage from '../pages/reference';

const MyRouter: React.FunctionComponent = props => {
    return <Router basename="/">
        <Header/>
        <Route exact path="/" component={homePage}/>
        <Route path="/?p=/project" component={projectPage}/>
        <Route path="/?p=/award" component={awardPage}/>
        <Route path="/?p=/reference" component={referencePage}/>
    </Router>
}

export default MyRouter;