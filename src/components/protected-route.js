import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Loader } from "./loader";

export const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component />;
};
