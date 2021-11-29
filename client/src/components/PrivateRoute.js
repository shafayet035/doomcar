import React from "react";
import { Redirect, Route } from "react-router";
import useFirebaseContext from "../hooks/useFirebaseContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useFirebaseContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
