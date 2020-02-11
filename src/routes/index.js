import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router';

import Home from '../containers/Home';
import NotFound from '../pages/404';
import Talks from '../containers/Talks';

export const PATH_HOME = "/";
export const PATH_TALKS = "/talks";

const routes = (
    <Switch>
        <Route exact path={PATH_HOME} component={Home}/>
        <Route exact path={PATH_TALKS} component={Talks}/>
        <Route component={NotFound}/>
    </Switch>
);

export default routes;
