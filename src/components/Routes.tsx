import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header";
import homePage from '../pages/home';
import awardPage from '../pages/award';
import projectPage from '../pages/project';
import specialThanksPage from '../pages/specialthanks';

const MyRouter: React.FunctionComponent = props => {
    return <Router basename="/">
        <Header/>
        <Route exact path="/" component={homePage}/>
        <Route path="/project" component={projectPage}/>
        <Route path="/award" component={awardPage}/>
        <Route path="/special" component={specialThanksPage}/>
    </Router>
}

export default MyRouter;