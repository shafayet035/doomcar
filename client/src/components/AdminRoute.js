import React from "react";
import { Redirect, Route } from "react-router";
import useFirebaseContext from "../hooks/useFirebaseContext";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isAdmin } = useFirebaseContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
