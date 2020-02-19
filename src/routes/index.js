import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../containers/Home';
import NotFound from '../pages/404';
import Talks from '../containers/Talks';
import OpenSource from '../containers/OpenSource';
import Courses from "../containers/Courses";

export const PATH_HOME = "/";
export const PATH_TALKS = "/talks";
export const PATH_OPEN_SOURCE = "/open-source";
export const PATH_COURSES = "/courses";

const routes = (
    <Switch>
        <Route exact path={PATH_HOME} component={Home}/>
        <Route exact path={PATH_TALKS} component={Talks}/>
        <Route exact path={PATH_OPEN_SOURCE} component={OpenSource}/>
        <Route exact path={PATH_COURSES} component={Courses}/>
        <Route component={NotFound}/>
    </Switch>
);

export default routes;
