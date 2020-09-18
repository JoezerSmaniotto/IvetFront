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
    // isPrivate = false,
    component: Component,
    ...rest
  }
)  => {


  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={ props  => 
        !!user ? ( <Component {...props} />)
        : ( <Redirect
              to={{
                pathname: '/signIn',
                state: {from: props.location},
              }}
          />)
      }
    />
  );
};

export default IsRouter;
