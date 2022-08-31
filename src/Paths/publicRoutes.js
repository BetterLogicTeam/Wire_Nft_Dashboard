import React from "react";
import { Redirect, Route,Navigate } from "react-router-dom";
function PublicRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated === 'true' ?
          <Navigate to="/dashboard" /> :
          <Component {...props} />

      }
    />
  );
}

export default PublicRoute;