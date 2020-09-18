import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteAut from './IsRouter';

import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import SignUp1 from '../Pages/SignUp1';
import Dashboard from '../Pages/Dashboard';

const Routes =  () => (

  <Switch>
    <Route path="/" exact component={SignUp} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/signIn1" component={SignUp1} />

   
    <RouteAut path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
