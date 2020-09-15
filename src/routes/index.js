import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../Pages/SignUp'

const Routes =  () => (
  <Switch>
    <Route path="/" exact component={SignUp} />
  </Switch>
);

export default Routes;
