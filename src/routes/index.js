import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../pages/Home';
import NotFound from '../pages/404';

const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
    </Switch>
);

export default routes;
