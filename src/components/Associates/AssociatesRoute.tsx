import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function AssociatesRoute({ children, path }: {children?: any, path: string }) {
    const auth = useContext(AuthContext);
    return (
      <Route
        render={() =>
          auth.username ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      />
    );
  }