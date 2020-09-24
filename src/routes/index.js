import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteAut from './IsRouter';
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'

import Dashboard from '../Pages/Dashboard';
import EditUser from '../Pages/EditUser';
import RegisterPet from '../Pages/RegisterPet'

const Routes =  () => (

  <Switch>
    <Route path="/" exact component={SignUp} />
    <Route path="/signIn" component={SignIn} />


    <RouteAut path="/editUser" component={EditUser} />
    <RouteAut path="/dashboard" component={Dashboard} />
    <RouteAut path="/registerPet" component={RegisterPet} />
  </Switch>
);

export default Routes;
