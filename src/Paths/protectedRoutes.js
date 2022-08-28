import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Layout } from "../../components"
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
console.log(isAuthenticated)
console.log( Boolean(isAuthenticated))
console.log(typeof Boolean(isAuthenticated))
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated==='true' ?
          <Layout>
            <Component {...props} />
          </Layout>
          : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;