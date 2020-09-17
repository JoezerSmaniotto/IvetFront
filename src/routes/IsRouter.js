import React from 'react';
import {
  Route,
  // RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/auth';

// interface RouteProps extends ReactDOMRouteProps {
//   isPrivate?: boolean;
//   component: React.ComponentType;
// }

const IsRouter = (
  {
    isPrivate = false,
    component: Component,
    ...rest
  }
)  => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default IsRouter;
